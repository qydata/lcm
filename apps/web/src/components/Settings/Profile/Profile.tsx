import type {Area} from "@hey/image-cropper/types";
import type {MetadataAttribute, ProfileOptions} from "@lens-protocol/metadata";
import {MetadataAttributeType, profile as profileMetadata} from "@lens-protocol/metadata";
import type {ChangeEvent, FC} from "react";
import {useState} from "react";
import type {z} from "zod";
import {object, string, union} from "zod";

import ChooseFile from "@components/Shared/ChooseFile";
import ImageCropperController from "@components/Shared/ImageCropperController";
import errorToast from "@helpers/errorToast";
import uploadCroppedImage, {readFile} from "@helpers/profilePictureUtils";
import {uploadDataToIPFS} from "@helpers/uploadToIPFS";
import {InformationCircleIcon, PencilIcon} from "@heroicons/react/24/outline";
import {LensHub} from "@hey/abis";
import {AVATAR, COVER, LENS_HUB, STATIC_IMAGES_URL} from "@hey/data/constants";
import {Errors} from "@hey/data/errors";
import {Regex} from "@hey/data/regex";
import {SETTINGS} from "@hey/data/tracking";
import getAvatar from "@hey/helpers/getAvatar";
import getProfileAttribute from "@hey/helpers/getProfileAttribute";
import imageKit from "@hey/helpers/imageKit";
import sanitizeDStorageUrl from "@hey/helpers/sanitizeDStorageUrl";
import trimify from "@hey/helpers/trimify";
import {getCroppedImg} from "@hey/image-cropper/cropUtils";
import {Button, Card, ErrorMessage, Form, Image, Input, Modal, Spinner, TextArea, useZodForm} from "@hey/ui";
import toast from "react-hot-toast";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useWriteContract} from "wagmi";
import IndexStatus from "@components/Shared/IndexStatus";
import {useProfileQuery} from "@hey/lens";
import {setSignProfile} from "../../../store/persisted/useAuthStore";

const editProfileSchema = object({
    bio: string().max(260, {message: "Bio should not exceed 260 characters"}),
    location: string().max(100, {
        message: "Location should not exceed 100 characters"
    }),
    name: string()
        .max(100, {message: "Name should not exceed 100 characters"})
        .regex(Regex.profileNameValidator, {
            message: "Profile name must not contain restricted symbols"
        }),
    website: union([
        string().regex(Regex.url, {message: "Invalid website"}),
        string().max(0)
    ]),
    x: string().max(100, {message: "X handle must not exceed 100 characters"})
});

type FormData = z.infer<typeof editProfileSchema>;

const ProfileSettingsForm: FC = () => {
    const {currentProfile} = useProfileStore();
    const {isSuspended} = useProfileStatus();
    const [isLoading, setIsLoading] = useState(false);

    // Cover Picture
    const [coverPictureIpfsUrl, setCoverPictureIpfsUrl] = useState(
        currentProfile?.metadata?.coverPicture?.__typename === "ImageSet"
            ? currentProfile?.metadata?.coverPicture?.raw.uri
            : ""
    );
    const [coverPictureSrc, setCoverPictureSrc] = useState("");
    const [showCoverPictureCropModal, setShowCoverPictureCropModal] =
        useState(false);
    const [croppedCoverPictureAreaPixels, setCoverPictureCroppedAreaPixels] =
        useState<Area | null>(null);
    const [uploadedCoverPictureUrl, setUploadedCoverPictureUrl] = useState("");
    const [uploadingCoverPicture, setUploadingCoverPicture] = useState(false);

    // Picture
    const [profilePictureIpfsUrl, setProfilePictureIpfsUrl] = useState(
        currentProfile?.metadata?.picture?.__typename === "ImageSet"
            ? currentProfile?.metadata?.picture?.raw.uri
            : ""
    );
    const [profilePictureSrc, setProfilePictureSrc] = useState("");
    const [showProfilePictureCropModal, setShowProfilePictureCropModal] =
        useState(false);
    const [croppedProfilePictureAreaPixels, setCroppedProfilePictureAreaPixels] =
        useState<Area | null>(null);
    const [uploadedProfilePictureUrl, setUploadedProfilePictureUrl] =
        useState("");
    const [uploadingProfilePicture, setUploadingProfilePicture] = useState(false);
    const [skip, setSkip] = useState(true)
    const onCompleted = (
        hash
    ) => {
        console.log(hash)
        setIsLoading(false);
        setSkip(false)
        toast.success("个人资料更新成功!");
        console.log(SETTINGS.PROFILE.UPDATE);
    };

    useProfileQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache', // 强制从网络获取数据
        returnPartialData: true,
        onCompleted: (data) => {
            if (data.profiles && data.profiles.length > 0) {
                setSignProfile(data.profiles[0]);
            }
        },
        skip: skip,
        pollInterval: 1000,
        variables: {fullHandle: currentProfile?.handle?.fullHandle}
    });

    const onError = (error: any) => {
        setIsLoading(false);
        errorToast(error);
    };

    const {data: writeHash, error, writeContractAsync} = useWriteContract({
        mutation: {onError, onSuccess: (hash) => onCompleted(hash)}
    });

    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: LensHub,
            address: LENS_HUB,
            args,
            functionName: "setProfileMetadataURI"
        });
    };

    const form = useZodForm({
        defaultValues: {
            bio: currentProfile?.metadata?.bio || "",
            location: getProfileAttribute(
                "location",
                currentProfile?.metadata?.attributes
            ),
            name: currentProfile?.metadata?.displayName || "",
            website: getProfileAttribute(
                "website",
                currentProfile?.metadata?.attributes
            ),
            x: getProfileAttribute(
                "x",
                currentProfile?.metadata?.attributes
            )?.replace(/(https:\/\/)?x\.com\//, "")
        },
        schema: editProfileSchema
    });

    const editProfile = async (data: FormData) => {
        if (!currentProfile) {
            return toast.error(Errors.SignWallet);
        }

        if (isSuspended) {
            return toast.error(Errors.Suspended);
        }

        try {
            setIsLoading(true);
            const otherAttributes =
                currentProfile.metadata?.attributes
                    ?.filter(
                        (attr) =>
                            !["location", "timestamp", "website"].includes(
                                attr.key
                            )
                    )
                    .map(({key, type, value}) => ({
                        key,
                        type: MetadataAttributeType[type] as any,
                        value
                    })) || [];

            const preparedProfileMetadata: ProfileOptions = {
                ...(data.name && {name: data.name}),
                ...(data.bio && {bio: data.bio}),
                attributes: [
                    ...(otherAttributes as MetadataAttribute[]),
                    {
                        key: "location",
                        type: MetadataAttributeType.STRING,
                        value: data.location
                    },
                    {
                        key: "website",
                        type: MetadataAttributeType.STRING,
                        value: data.website
                    },
                    {
                        key: "timestamp",
                        type: MetadataAttributeType.STRING,
                        value: new Date().toISOString()
                    }
                ],
                coverPicture: coverPictureIpfsUrl ? coverPictureIpfsUrl : undefined,
                picture: profilePictureIpfsUrl ? profilePictureIpfsUrl : undefined
            };
            preparedProfileMetadata.attributes =
                preparedProfileMetadata.attributes?.filter((m) => {
                    return m.key !== "" && Boolean(trimify(m.value));
                });
            const metadata = profileMetadata(preparedProfileMetadata);
            const {uri} = await uploadDataToIPFS(metadata);

            const request = {
                metadataURI: uri
            };

            return await write({args: [currentProfile.id, request.metadataURI]});
        } catch (error) {
            onError(error);
        }
    };

    const uploadAndSave = async (type: "avatar" | "cover") => {
        try {
            const croppedImage = await getCroppedImg(
                type === "avatar" ? profilePictureSrc : coverPictureSrc,
                type === "avatar"
                    ? croppedProfilePictureAreaPixels
                    : croppedCoverPictureAreaPixels
            );

            if (!croppedImage) {
                return toast.error(Errors.SomethingWentWrong);
            }

            // Update Loading State
            if (type === "avatar") {
                setUploadingProfilePicture(true);
            } else if (type === "cover") {
                setUploadingCoverPicture(true);
            }

            const ipfsUrl = await uploadCroppedImage(croppedImage);
            const dataUrl = croppedImage.toDataURL("image/png");

            // Update Profile Picture
            if (type === "avatar") {
                setProfilePictureIpfsUrl(ipfsUrl);
                setUploadedProfilePictureUrl(dataUrl);
            } else if (type === "cover") {
                setCoverPictureIpfsUrl(ipfsUrl);
                setUploadedCoverPictureUrl(dataUrl);
            }
        } catch (error) {
            onError(error);
        } finally {
            setShowCoverPictureCropModal(false);
            setShowProfilePictureCropModal(false);
            setUploadingCoverPicture(false);
            setUploadingProfilePicture(false);
        }
    };

    const onFileChange = async (
        evt: ChangeEvent<HTMLInputElement>,
        type: "avatar" | "cover"
    ) => {
        const file = evt.target.files?.[0];
        if (file) {
            if (type === "avatar") {
                setProfilePictureSrc(await readFile(file));
                setShowProfilePictureCropModal(true);
            } else if (type === "cover") {
                setCoverPictureSrc(await readFile(file));
                setShowCoverPictureCropModal(true);
            }
        }
    };

    const coverPictureUrl =
        currentProfile?.metadata?.coverPicture?.optimized?.uri ||
        `${STATIC_IMAGES_URL}/patterns/2.svg`;
    const renderCoverPictureUrl = coverPictureUrl
        ? imageKit(sanitizeDStorageUrl(coverPictureUrl), COVER)
        : "";

    const profilePictureUrl = getAvatar(currentProfile);
    const renderProfilePictureUrl = profilePictureUrl
        ? imageKit(sanitizeDStorageUrl(profilePictureUrl), AVATAR)
        : "";

    return (

        <>
            {writeHash ? (
                <div className="mt-2">
                    <IndexStatus
                        reload
                        txHash={writeHash}
                    />
                </div>
            ) : (
                <>
                    <Card className="p-5">
                        <Form
                            className="space-y-4"
                            form={form}
                            onSubmit={(data) => editProfile(data)}
                        >
                            {error ? (
                                <ErrorMessage
                                    className="mb-3"
                                    error={error}
                                    title="Transaction failed!"
                                />
                            ) : null}
                            <Input
                                disabled
                                label="身份 ID"
                                type="text"
                                value={currentProfile?.id}
                            />
                            <Input
                                label="名称"
                                placeholder="Gavin"
                                type="text"
                                {...form.register("name")}
                            />
                            <Input
                                label="地理位置"
                                placeholder="迈阿密"
                                type="text"
                                {...form.register("location")}
                            />
                            <Input
                                label="站点"
                                placeholder="https://hooli.com"
                                type="text"
                                {...form.register("website")}
                            />
                            <TextArea
                                label="个人简介"
                                placeholder="Tell us something about you!"
                                {...form.register("bio")}
                            />
                            <div className="space-y-1.5">
                                <div className="label">头像</div>
                                <div className="space-y-3">
                                    <Image
                                        alt="Profile picture crop preview"
                                        className="max-w-xs rounded-lg"
                                        onError={({currentTarget}) => {
                                            currentTarget.src = sanitizeDStorageUrl(
                                                profilePictureIpfsUrl
                                            );
                                        }}
                                        src={uploadedProfilePictureUrl || renderProfilePictureUrl}
                                    />
                                    <ChooseFile onChange={(event) => onFileChange(event, "avatar")}/>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="label">封面</div>
                                <div className="space-y-3">
                                    <div>
                                        <Image
                                            alt="Cover picture crop preview"
                                            className="h-[175px] w-[675px] rounded-lg object-cover"
                                            onError={({currentTarget}) => {
                                                currentTarget.src =
                                                    sanitizeDStorageUrl(coverPictureIpfsUrl);
                                            }}
                                            src={uploadedCoverPictureUrl || renderCoverPictureUrl}
                                        />
                                    </div>
                                    <ChooseFile onChange={(event) => onFileChange(event, "cover")}/>
                                </div>
                            </div>
                            <Button
                                className="ml-auto"
                                disabled={
                                    isLoading ||
                                    (!form.formState.isDirty &&
                                        !coverPictureSrc &&
                                        !profilePictureSrc)
                                }
                                icon={
                                    isLoading ? (
                                        <Spinner size="xs"/>
                                    ) : (
                                        <PencilIcon className="size-4"/>
                                    )
                                }
                                type="submit"
                            >
                                保存
                            </Button>
                        </Form>
                    </Card>
                    <Modal
                        onClose={
                            isLoading
                                ? undefined
                                : () => {
                                    setCoverPictureSrc("");
                                    setShowCoverPictureCropModal(false);
                                }
                        }
                        show={showCoverPictureCropModal}
                        size="lg"
                        title="Crop cover picture"
                    >
                        <div className="p-5 text-right">
                            <ImageCropperController
                                imageSrc={coverPictureSrc}
                                setCroppedAreaPixels={setCoverPictureCroppedAreaPixels}
                                targetSize={{height: 350, width: 1350}}
                            />
                            <div className="flex w-full flex-wrap items-center justify-between gap-y-3">
                                <div className="ld-text-gray-500 flex items-center space-x-1 text-left text-sm">
                                    <InformationCircleIcon className="size-4"/>
                                    <div>
                                        最佳封面图片尺寸为 <b>1350x350</b>
                                    </div>
                                </div>
                                <Button
                                    disabled={uploadingCoverPicture || !coverPictureSrc}
                                    icon={
                                        uploadingCoverPicture ? (
                                            <Spinner size="xs"/>
                                        ) : (
                                            <PencilIcon className="size-4"/>
                                        )
                                    }
                                    onClick={() => uploadAndSave("cover")}
                                    type="submit"
                                >
                                    上传
                                </Button>
                            </div>
                        </div>
                    </Modal>
                    {/* Picture */}
                    <Modal
                        onClose={
                            isLoading
                                ? undefined
                                : () => {
                                    setProfilePictureSrc("");
                                    setShowProfilePictureCropModal(false);
                                }
                        }
                        show={showProfilePictureCropModal}
                        size="sm"
                        title="Crop profile picture"
                    >
                        <div className="p-5 text-right">
                            <ImageCropperController
                                imageSrc={profilePictureSrc}
                                setCroppedAreaPixels={setCroppedProfilePictureAreaPixels}
                                targetSize={{height: 300, width: 300}}
                            />
                            <Button
                                disabled={uploadingProfilePicture || !profilePictureSrc}
                                icon={
                                    uploadingProfilePicture ? (
                                        <Spinner size="xs"/>
                                    ) : (
                                        <PencilIcon className="size-4"/>
                                    )
                                }
                                onClick={() => uploadAndSave("avatar")}
                                type="submit"
                            >
                                上传
                            </Button>
                        </div>
                    </Modal>
                </>
            )}
        </>
    );
};

export default ProfileSettingsForm;
