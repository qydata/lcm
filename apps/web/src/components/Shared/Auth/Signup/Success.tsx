import type {FC} from "react";
import {useState} from "react";

import errorToast from "@helpers/errorToast";
import {RsaSignUp, STATIC_IMAGES_URL} from "@hey/data/constants";
import {AUTH} from "@hey/data/tracking";
import {Button, H4, Spinner} from "@hey/ui";
import {signIn} from "src/store/persisted/useAuthStore";
import {useAccount, useSignMessage, useWriteContract} from "wagmi";

import {useSignupStore} from ".";
import sha256 from "@hey/helpers/sha256";
import {upSignInfo} from "@components/encCommon";
import {RsaSignUpABI} from "@hey/abis";

const Success: FC = () => {
    const {newProfile} = useSignupStore();
    const [isLoading, setIsLoading] = useState(false);
    const {address} = useAccount();
    const [authSign, setAuthSign] = useState(null)
    const [signInfo, setSignInfo] = useState(null)
    const onError = (error: any) => {
        console.log(error)
        setIsLoading(false);
        errorToast(error.toString());
    };
    const {error, writeContractAsync} = useWriteContract({
        mutation: {
            onError: (error) => onError(error),
            onSuccess: (hash) => onuCompleted(hash)
        }
    });
    const onuCompleted = (hash) => {
        console.log(hash)
        let _profile = JSON.parse(JSON.stringify(newProfile))
        _profile.signInfo = signInfo
        signIn({authSign: authSign, profile: _profile});
        console.log(AUTH.LOGIN, {newProfile: _profile, source: "signup"});
        location.reload();
    }

    const {signMessageAsync} = useSignMessage({mutation: {onError}});
    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: RsaSignUpABI,
            address: RsaSignUp,
            args,
            functionName: "signup"
        });
    };
    const handleSign = async () => {
        try {
            setIsLoading(true);
            // Get challenge
            let _sha256Addr = sha256(address)
            // Get signature
            const signature = await signMessageAsync({
                message: 'XMTP : Enable ldentity' +
                    `\n${_sha256Addr}` +
                    '\n\nFor more info:\nhttps://ctblock.cn/signatures/'
            });
            let _profile = JSON.parse(JSON.stringify(newProfile))
            // 这里进行判断
            if (!_profile.signInfo?.publicKey) {
                let {signInfo} = await upSignInfo(signature, _profile)
                setSignInfo(signInfo)
                setAuthSign(signature)
                _profile.signInfo = signInfo
                await write({args: ["0x" + signInfo.encPrivateKey, "0x" + signInfo.publicKey]})
            } else{
                signIn({authSign: signature, profile: _profile});
                console.log(AUTH.LOGIN, {newProfile: _profile, source: "signup"});
                location.reload();
            }

        } catch {
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="m-8 flex flex-col items-center justify-center">
            <H4>哇嘿！您拿到了您的个人资料！</H4>
            <div className="ld-text-gray-500 mt-3 text-center font-semibold">
                欢迎来到去中心化的社交，这里一切都是如此丰富
                更好！🎉
            </div>
            <img
                alt="Dizzy emoji"
                className="mx-auto mt-8 size-14"
                src={`${STATIC_IMAGES_URL}/emojis/dizzy.png`}
            />
            <Button
                className="mt-5"
                disabled={isLoading}
                icon={
                    isLoading ? (
                        <Spinner className="mr-0.5" size="xs"/>
                    ) : (
                        <img
                            alt="Lens Logo"
                            className="h-3"
                            height={12}
                            src="/lens.svg"
                            width={19}
                        />
                    )
                }
                onClick={handleSign}
            >
                使用 Lens 登录
            </Button>
        </div>
    );
};

export default Success;
