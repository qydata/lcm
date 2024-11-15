import NewAttachments from "@components/Composer/NewAttachments";
import {AudioPublicationSchema} from "@components/Shared/Audio";
import {GatedClient} from "@components/encCommon";
import errorToast from "@helpers/errorToast";
import {uploadDataToIPFS} from "@helpers/uploadToIPFS";
import {LensHub} from "@hey/abis";
import {KNOWN_ATTRIBUTES, LENS_HUB, ZERO_ADDRESS} from "@hey/data/constants";
import {Errors} from "@hey/data/errors";
import {PUBLICATION} from "@hey/data/tracking";
import getMentions from "@hey/helpers/getMentions";
import getProfile from "@hey/helpers/getProfile";
import type {IGif} from "@hey/types/giphy";
import type {NewAttachment} from "@hey/types/misc";
import {Button, Card, ErrorMessage, H6, Spinner} from "@hey/ui";
import {MetadataAttributeType} from "@lens-protocol/metadata";

import dynamic from "next/dynamic";
import type {FC} from "react";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import useCreatePoll from "src/hooks/useCreatePoll";
import usePublicationMetadata from "src/hooks/usePublicationMetadata";
import {useCollectModuleStore} from "src/store/non-persisted/publication/useCollectModuleStore";
import {usePublicationAttachmentStore} from "src/store/non-persisted/publication/usePublicationAttachmentStore";
import {usePublicationAttributesStore} from "src/store/non-persisted/publication/usePublicationAttributesStore";
import {
    DEFAULT_AUDIO_PUBLICATION,
    usePublicationAudioStore
} from "src/store/non-persisted/publication/usePublicationAudioStore";
import {usePublicationLicenseStore} from "src/store/non-persisted/publication/usePublicationLicenseStore";
import {usePublicationLiveStore} from "src/store/non-persisted/publication/usePublicationLiveStore";
import {usePublicationPollStore} from "src/store/non-persisted/publication/usePublicationPollStore";
import {usePublicationStore} from "src/store/non-persisted/publication/usePublicationStore";
import {
    DEFAULT_VIDEO_THUMBNAIL,
    usePublicationVideoStore
} from "src/store/non-persisted/publication/usePublicationVideoStore";
import {useGlobalModalStateStore} from "src/store/non-persisted/useGlobalModalStateStore";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useAccount, useSignMessage, useWriteContract} from "wagmi";
import {Editor, useEditorContext, withEditorContext} from "./Editor";
import LinkPreviews from "./LinkPreviews";
import {webCryptoProvider} from "@components/webCryptoProvider";
import IndexStatus from "@components/Shared/IndexStatus";
import {Post} from "@components/Common/gated/graphql";

const Shimmer = <div className="shimmer mb-1 size-5 rounded-lg"/>;
const Attachment = dynamic(
    () => import("@components/Composer/Actions/Attachment"),
    {loading: () => Shimmer}
);
const EmojiPicker = dynamic(() => import("@components/Shared/EmojiPicker"), {
    loading: () => Shimmer
});
const Gif = dynamic(() => import("@components/Composer/Actions/Gif"), {
    loading: () => Shimmer
});

interface NewPublicationProps {
    className?: string;
    publication?: Post;
}

const NewPublication: FC<NewPublicationProps> = ({
                                                     className,
                                                     publication
                                                 }) => {
    const {currentProfile} = useProfileStore();
    const {isSuspended} = useProfileStatus();

    // Global modal store
    const {setShowNewPostModal} = useGlobalModalStateStore();

    // Nonce store

    // Publication store
    const {
        publicationContent,
        setPublicationContent,
        setTags
    } = usePublicationStore();

    // Audio store
    const {audioPublication, setAudioPublication} = usePublicationAudioStore();

    // Video store
    const {setVideoThumbnail, videoThumbnail} = usePublicationVideoStore();

    // Live video store
    const {resetLiveVideoConfig, setShowLiveVideoEditor, showLiveVideoEditor} =
        usePublicationLiveStore();

    // Attachment store
    const {addAttachments, attachments, isUploading, setAttachments} =
        usePublicationAttachmentStore((state) => state);

    // Poll store
    const {pollConfig, resetPollConfig, setShowPollEditor, showPollEditor} =
        usePublicationPollStore();

    // License store
    const {setLicense} = usePublicationLicenseStore();

    // Collect module store
    useCollectModuleStore(
        (state) => state
    );

    // Reference module store
// Attributes store
    const {reset: resetAttributes} = usePublicationAttributesStore();

    // States
    const [isLoading, setIsLoading] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [publicationContentError, setPublicationContentError] = useState("");
    const [nftOpenActionEmbed, setNftOpenActionEmbed] = useState();
    const [exceededMentionsLimit, setExceededMentionsLimit] = useState(false);

    const editor = useEditorContext();

    const createPoll = useCreatePoll();
    const getMetadata = usePublicationMetadata();
    const {address, connector: activeConnector} = useAccount();

    const hasAudio = attachments[0]?.type === "Audio";
    const hasVideo = attachments[0]?.type === "Video";

    const onError = (error?: any) => {
        console.trace(error);

        setIsLoading(false);
        errorToast(error);
    };
    const {signMessageAsync} = useSignMessage({mutation: {onError}});
    const {data: writeHash, error, writeContractAsync} = useWriteContract({
        mutation: {
            onError: () => {

            },
            onSuccess: (hash) => onCompleted(hash)
        }
    });

    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: LensHub,
            address: LENS_HUB,
            args,
            functionName: "post"
        });
    };

    const reset = () => {
        editor?.setMarkdown("");
        setIsLoading(false);
        setPublicationContent("");
        setTags(null);
        setShowPollEditor(false);
        resetPollConfig();
        setShowLiveVideoEditor(false);
        resetLiveVideoConfig();
        setAttachments([]);
        setVideoThumbnail(DEFAULT_VIDEO_THUMBNAIL);
        setAudioPublication(DEFAULT_AUDIO_PUBLICATION);
        setLicense(null);
        resetAttributes();
        setShowNewPostModal(false);
    };

    const onCompleted = (
        hash: string
    ) => {
        console.log(hash)
        // Reset states
        reset();

        // Track in leafwatch
        const eventProperties = {
            comment_on: null,
            publication_has_attachments: attachments.length > 0,
            publication_has_poll: showPollEditor,
            publication_is_live: showLiveVideoEditor,
            publication_reference_module_degrees_of_separation: null,
            quote_on: null
        };
        console.log(
            PUBLICATION.NEW_POST,
            eventProperties
        );
    };

    const [cClient, setCClient] = useState<GatedClient>();
    useEffect(() => {
        const signer = {
            getAddress: () => {
                return address;
            },
            signMessage: (message: any) => {
                return signMessageAsync({
                    message: message
                }) as Promise<string>;
            }
        };

        const cClient = new GatedClient({
            signer: signer,
            encryptionProvider: webCryptoProvider()
        });
        setCClient(cClient);
    }, []);
    useEffect(() => {
        setPublicationContentError("");
    }, [audioPublication]);

    useEffect(() => {
        if (getMentions(publicationContent).length > 50) {
            setExceededMentionsLimit(true);
            setPublicationContentError("You can only mention 50 people at a time!");
        } else {
            setExceededMentionsLimit(false);
            setPublicationContentError("");
        }
    }, [publicationContent]);

    const getAnimationUrl = () => {
        const fallback =
            "ipfs://bafkreiaoua5s4iyg4gkfjzl6mzgenw4qw7mwgxj7zf7ev7gga72o5d3lf4";

        if (attachments.length > 0 || hasAudio || hasVideo) {
            return attachments[0]?.uri || fallback;
        }

        return fallback;
    };

    const getTitlePrefix = () => {
        if (hasVideo) {
            return "Video";
        }

        return "Post";
    };

    const createPublication = async () => {
        if (!currentProfile) {
            return toast.error(Errors.SignWallet);
        }
        if (isSuspended) {
            return toast.error(Errors.Suspended);
        }

        try {
            setIsLoading(true);
            if (hasAudio) {
                setPublicationContentError("");
                const parsedData = AudioPublicationSchema.safeParse(audioPublication);
                if (!parsedData.success) {
                    const issue = parsedData.error.issues[0];
                    setIsLoading(false);
                    return setPublicationContentError(issue.message);
                }
            }

            if (publicationContent.length === 0 && attachments.length === 0) {
                setIsLoading(false);
                return setPublicationContentError(
                    `${
                        "Post"
                    } should not be empty!`
                );
            }

            setPublicationContentError("");

            let pollId: string | undefined;
            if (showPollEditor) {
                pollId = await createPoll();
            }

            const processedPublicationContent =
                publicationContent.length > 0 ? publicationContent : undefined;
            const title = hasAudio
                ? audioPublication.title
                : `${getTitlePrefix()} by ${getProfile(currentProfile).slugWithPrefix}`;
            const hasAttributes = Boolean(pollId);

            const baseMetadata = {
                content: processedPublicationContent,
                title,
                ...(hasAttributes && {
                    attributes: [
                        ...(pollId
                            ? [
                                {
                                    key: KNOWN_ATTRIBUTES.POLL_ID,
                                    type: MetadataAttributeType.STRING,
                                    value: pollId
                                }
                            ]
                            : [])
                    ]
                }),
                marketplace: {
                    animation_url: getAnimationUrl(),
                    // description: processedPublicationContent,
                    external_url: `http://localhost:4783/${getProfile(currentProfile).link}`,
                    name: title
                }
            };

            const metadata = getMetadata({baseMetadata});
            // create metadata via '@lens-protocol/metadata' helpers
            // const metadata = article({ content: "My super secret article" });

            // encrypt the metadata specifying the access condition
            const result = await cClient?.encryptPublicationMetadata(
                metadata,
                [
                    // {
                    //     address: address,
                    //     publicKey: "30820122300d06092a864886f70d01010105000382010f003082010a0282010100b2b2713f88aaee05aa198995b0a3bc289e0b29f0da45670df08d6664f31378fe5c25aa1d294a26e97f55e09e93aaf9a87c60749952db0fe5b64abb09e2e669e047fb2b9a1c9c1edbaa7356dc785c3031e32d3b1c48285a39ed2dac6769d64403ae0badb8428ea0268c4439d9f70f280f2d4d916a9cfd364e23d456ae62ee1cd8e3335a80fd4d64711861dacd7116e6f7e81cdd98d0fef4841f16bd2fadb72a6171ee1adc452910d0614c37b85e456df22e01dc948c9e607b4b4f79ab3896c560e61f9c196b8f96476df131006ce7d01b0d3ce7ca2a2a8523e2a23a5824e770638c541d8a995e7961b60f367ecea637226fd117dbcaa6e08ed2922c02fce37f2d0203010001"
                    // }
                ]
            );
            const encrypted = result.unwrap();

            const {uri} = await uploadDataToIPFS(encrypted);
            // Payload for the open action module
            const openActionModules = [];

            if (nftOpenActionEmbed) {
                openActionModules.push(nftOpenActionEmbed);
            }

            // Payload for the Momoka post/comment/quote
            const contentURI = uri

            // 构建合约调用数据
            //   struct PostParams {
            //     uint256 profileId;
            //     string contentURI;
            //     address[] actionModules;
            //     bytes[] actionModulesInitDatas;
            //     address referenceModule;
            //     bytes referenceModuleInitData;
            // }
            const postParams = {
                profileId: currentProfile.id,
                contentURI: contentURI,
                actionModules: [],
                actionModulesInitDatas: [],
                referenceModule: ZERO_ADDRESS,
                referenceModuleInitData: ZERO_ADDRESS
            };

            return await write({args: [postParams]});
        } catch (error) {
            onError(error);
        }
    };

    const setGifAttachment = (gif: IGif) => {
        const attachment: NewAttachment = {
            mimeType: "image/gif",
            previewUri: gif.images.original.url,
            type: "Image",
            uri: gif.images.original.url
        };
        addAttachments([attachment]);
    };

    const isSubmitDisabledByPoll = showPollEditor
        ? !pollConfig.options.length ||
        pollConfig.options.some((option) => !option.length)
        : false;

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
                <Card className={className} onClick={() => setShowEmojiPicker(false)}>
                    {error ? (
                        <ErrorMessage
                            className="!rounded-none"
                            error={error}
                            title="Transaction failed!"
                        />
                    ) : null}
                    <Editor/>
                    {publicationContentError ? (
                        <H6 className="mt-1 px-5 pb-3 text-red-500">
                            {publicationContentError}
                        </H6>
                    ) : null}
                    {!nftOpenActionEmbed ? <LinkPreviews/> : null}
                    <NewAttachments attachments={attachments}/>
                    <div className="divider mx-5"/>
                    <div className="block items-center px-5 py-3 sm:flex">
                        <div className="flex items-center space-x-4">
                            <Attachment/>
                            <EmojiPicker
                                setEmoji={(emoji: string) => {
                                    setShowEmojiPicker(false);
                                    editor?.insertText(emoji);
                                }}
                                setShowEmojiPicker={setShowEmojiPicker}
                                showEmojiPicker={showEmojiPicker}
                            />
                            <Gif setGifAttachment={(gif: IGif) => setGifAttachment(gif)}/>
                        </div>
                        <div className="mt-2 ml-auto sm:mt-0">
                            <Button
                                disabled={
                                    isLoading ||
                                    isUploading ||
                                    isSubmitDisabledByPoll ||
                                    videoThumbnail.uploading ||
                                    exceededMentionsLimit
                                }
                                onClick={createPublication}
                                icon={
                                    isLoading ? (
                                        <Spinner size="xs"/>
                                    ) : (<></>)
                                }
                            >
                                {"发布"}
                            </Button>
                        </div>
                    </div>
                </Card>
            )}
        </>
    );
};

export default withEditorContext(NewPublication);
