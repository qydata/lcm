import type {Profile} from "@hey/lens";
import type {FC} from "react";
import {useState} from "react";

import PublicationProfile from "@components/Publication/PublicationProfile";
import {XMarkIcon} from "@heroicons/react/24/outline";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import {usePublicationStore} from "src/store/non-persisted/publication/usePublicationStore";

import PublicationMenu from "./Actions/Menu";
import SearchProfiles from "@components/Shared/SearchProfiles";
import {Modal} from "@hey/ui";
import {LensHub} from "@hey/abis";
import {LENS_HUB, ZERO_ADDRESS} from "@hey/data/constants";
import {useWriteContract} from "wagmi";
import errorToast from "@helpers/errorToast";
import {getFromIPFS, uploadDataToIPFS} from "@helpers/uploadToIPFS";
import toast from "react-hot-toast";
import IndexStatus from "@components/Shared/IndexStatus";
import {Post} from "@components/Common/gated/graphql";
import {
    aesDecryptKey,
    getEncryptionKey,
    getOrCreateAuthSig,
    saveEncryptionKey
} from "@components/Common/gated/GatedClient";

interface PublicationHeaderProps {
    isNew?: boolean;
    publication: Post;
    quoted?: boolean;
}

const PublicationHeader: FC<PublicationHeaderProps> = ({
                                                           isNew = false,
                                                           publication,
                                                           quoted = false
                                                       }) => {
    const {setQuotedPublication} = usePublicationStore();

    function uint8arrayToHexString(buffer: Uint8Array): string {
        return buffer.reduce(
            (str, byte) => str + byte.toString(16).padStart(2, "0"),
            ""
        );
    }

    const targetPublication = publication;
    const profile = targetPublication.by;
    const timestamp = targetPublication.createdAt;
    const reset = () => {
        setIsLoading(false);
        setQuotedPublication(null);
    };

    const [isLoading, setIsLoading] = useState(false);

    const [showSearch, setShowSearch] = useState(false)
    const [value, setValue] = useState("");

    const {data: writeHash, error, writeContractAsync} = useWriteContract({
        mutation: {
            onError: errorToast,
            onSuccess: (hash: string) => {
                setShowSearch(false)
                console.log(hash)
            }
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

    const onProfileSelected = async (access_profile: Profile) => {
        //     TODO 只需要解密加密key,再生成, 然后上链就可以了
        //  !!!!!!!!!!!!!!!!! 从这里开始
        //  获取ipfs文件

        let ori_metadata = await getFromIPFS(publication.metadata.id)

        let own_encryptionKey = ori_metadata.lens.encryptedWith.encryptionKey
        //  解密

        const {authSign, profile} = await getOrCreateAuthSig();

        let _toDecrypt = profile.signInfo.encPrivateKey
        _toDecrypt = _toDecrypt.replace("0x", "")
        let privateKey = await aesDecryptKey({
            authSign,
            toDecrypt: _toDecrypt
        })
        let access_Key = await getEncryptionKey({
            priKey: privateKey,
            toDecrypt: own_encryptionKey
        });
        let _publicKey = access_profile.signInfo.publicKey.replace("0x", "")
        let access_encryptionKey = await saveEncryptionKey({
            pubkey: _publicKey,
            symmetricKey: uint8arrayToHexString(access_Key)
        });

        let _accessCondition = ori_metadata.lens.encryptedWith.accessCondition
        for (let accessConditionKey in _accessCondition) {
            if (_accessCondition[accessConditionKey].address.toLowerCase() === access_profile.ownedBy.toLowerCase()) {
                toast.error("当前用户已经给分享!");
                return
            }

        }
        ori_metadata.lens.shareFrom = publication.metadata.id
        ori_metadata.lens.encryptedWith.accessCondition.push({
            address: access_profile.ownedBy,
            publicKey: access_profile.signInfo.publicKey,
            encryptionKey: uint8arrayToHexString(access_encryptionKey)
        })

        const {uri} = await uploadDataToIPFS(ori_metadata);

        // Payload for the Momoka post/comment/quote
        const momokaRequest = {
            contentURI: uri
        };

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
            profileId: profile.id,
            contentURI: `SHARE://${publication.id}/${access_profile.id}/` + momokaRequest.contentURI,
            actionModules: [],
            actionModulesInitDatas: [],
            referenceModule: ZERO_ADDRESS,
            referenceModuleInitData: ZERO_ADDRESS
        };

        return await write({args: [postParams]});
    };

    return (
        <div
            className="flex w-full items-start justify-between"
            onClick={stopEventPropagation}
        >
            {writeHash ? (
                <div className="mt-2">
                    <IndexStatus
                        reload
                        txHash={writeHash}
                    />
                </div>
            ) : (
                <>
                    <PublicationProfile
                        profile={profile}
                        publicationId={targetPublication.id}
                        source={targetPublication.publishedOn?.id}
                        tags={targetPublication.metadata?.tags || []}
                        timestamp={timestamp}
                    />
                    {!publication.isHidden && !quoted ? (
                            <PublicationMenu publication={targetPublication} setShowSearch={setShowSearch}/>
                        )
                        :
                        (
                            <div className="size-[30px]"/>
                        )
                    }
                    <Modal
                        onClose={() => setShowSearch(false)}
                        show={showSearch}
                        title="新建分享"
                    >
                        <div className="p-5">
                            <SearchProfiles
                                onChange={(event) => setValue(event.target.value)}
                                onProfileSelected={onProfileSelected}
                                value={value}
                            />
                        </div>
                    </Modal>
                    {
                        quoted && isNew ? (
                            <button
                                aria-label="Remove Quote"
                                className="rounded-full border p-1.5 hover:bg-gray-300/20"
                                onClick={() => setQuotedPublication(null)}
                                type="reset"
                            >
                                <XMarkIcon className="ld-text-gray-500 size-4"/>
                            </button>
                        ) : null
                    }
                </>
            )}
        </div>
    );
};

export default PublicationHeader;
