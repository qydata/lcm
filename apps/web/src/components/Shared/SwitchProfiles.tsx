import type {Profile} from "@hey/lens";
import {useProfilesManagedQuery} from "@hey/lens";
import type {FC} from "react";
import {useState} from "react";

import errorToast from "@helpers/errorToast";
import {Leafwatch} from "@helpers/leafwatch";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {PROFILE} from "@hey/data/tracking";
import getAvatar from "@hey/helpers/getAvatar";
import getProfile from "@hey/helpers/getProfile";
import {ErrorMessage, H4, Image, Spinner} from "@hey/ui";
import cn from "@hey/ui/cn";
import {signIn} from "src/store/persisted/useAuthStore";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useAccount, useSignMessage, useWriteContract} from "wagmi";
import sha256 from "@hey/helpers/sha256";

import WalletSelector from "./Auth/WalletSelector";
import Loader from "./Loader";
import {upSignInfo} from "@components/encCommon";
import {RsaSignUpABI} from "@hey/abis";
import {RsaSignUp} from "@hey/data/constants";
import {toast} from "react-hot-toast";

const SwitchProfiles: FC = () => {
    const {currentProfile} = useProfileStore();
    const [isLoading, setIsLoading] = useState(false);
    const [loggingInProfileId, setLoggingInProfileId] = useState<null | string>(
        null
    );
    const {address} = useAccount();

    const onError = (error: any) => {
        setIsLoading(false);
        errorToast(error);
    };

    const {signMessageAsync} = useSignMessage({mutation: {onError}});

    const {data, error, loading} = useProfilesManagedQuery({
        fetchPolicy: 'no-cache', // 强制从网络获取数据
        returnPartialData: true,
        variables: {ownedBy: address}
    });

    const {data: writeHash, error: errorSignUp, writeContractAsync} = useWriteContract({
        mutation: {
            onError: () => onErrored(),
            onSuccess: (hash) => onuCompleted(hash)
        }
    });
    const onuCompleted = (hash) => {
        console.log(hash)
    }
    const onErrored = () => {
        toast.error("Failed to sign up");
        throw "Failed to sign up"
    }
    const profiles = data?.profiles || [];
    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: RsaSignUpABI,
            address: RsaSignUp,
            args,
            functionName: "signup"
        });
    };
    const switchProfile = async (profile: Profile) => {
        try {
            setLoggingInProfileId(profile?.id);
            setIsLoading(true);


            let _sha256Addr = sha256(address)
            // Get signature
            const signature = await signMessageAsync({
                message: 'XMTP : Enable ldentity' +
                    `\n${_sha256Addr}` +
                    '\n\nFor more info:\nhttps://ctblock.cn/signatures/'
            });
            // 这里进行判断
            if (!profile.signInfo?.publicKey) {
                let {signInfo} = await upSignInfo(signature, profile)

                await write({args: [signInfo.encPrivateKey, signInfo.publicKey]})
                profile.signInfo = signInfo
            }
            signIn({authSign: signature, profile: profile});
            console.log(PROFILE.SWITCH_PROFILE, {
                switch_profile_to: profile?.id
            });
            location.reload();
        } catch (error) {
            onError(error);
        }
    };

    if (!address) {
        return (
            <div className="m-5 space-y-5">
                <div className="space-y-2">
                    <H4>连接您的钱包。</H4>
                    <div className="ld-text-gray-500 text-sm">
                        似乎您已断开与钱包的连接或尝试访问
                        这是从不同的钱包。请切换到正确的钱包。
                    </div>
                </div>
                <WalletSelector/>
            </div>
        );
    }

    if (loading) {
        return <Loader className="my-5" message="加载我的身份"/>;
    }
    return (
        <div className="max-h-[80vh] overflow-y-auto p-2">
            <ErrorMessage
                className="m-2"
                error={error}
                title="Failed to load profiles"
            />
            {profiles.map((profile, index) => (
                <button
                    className="flex w-full cursor-pointer items-center justify-between space-x-2 rounded-lg py-3 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    key={profile?.id}
                    onClick={async () => {
                        const selectedProfile = profiles[index] as Profile;
                        await switchProfile(selectedProfile);
                    }}
                    type="button"
                >
          <span className="flex items-center space-x-2">
            <Image
                alt={profile?.id}
                className="size-6 rounded-full border dark:border-gray-700"
                height={20}
                onError={({currentTarget}) => {
                    currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
                }}
                src={getAvatar(profile)}
                width={20}
            />
            <div
                className={cn(
                    currentProfile?.id === profile?.id && "font-bold",
                    "truncate"
                )}
            >
              {getProfile(profile as Profile).slugWithPrefix}
            </div>
          </span>
                    {isLoading && profile?.id === loggingInProfileId ? (
                        <Spinner size="xs"/>
                    ) : currentProfile?.id === profile?.id ? (
                        <CheckCircleIcon className="size-5 text-green-500"/>
                    ) : null}
                </button>
            ))}
        </div>
    );
};

export default SwitchProfiles;
