import sha256 from "@lcm/helpers/sha256";
import type { Profile } from "@lcm/lens";
import { useProfilesManagedQuery } from "@lcm/lens";
import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";

import SwitchNetwork from "@components/Shared/SwitchNetwork";
import errorToast from "@helpers/errorToast";
import { KeyIcon } from "@heroicons/react/24/outline";
import { AUTH } from "@lcm/data/tracking";
import { Button, Card } from "@lcm/ui";
import { CHAIN } from "src/constants";
import { signIn } from "src/store/persisted/useAuthStore";
import {
  useAccount,
  useChainId,
  useDisconnect,
  useSignMessage,
  useWriteContract
} from "wagmi";

import { upSignInfo } from "@components/encCommon";
import { RsaSignUpABI } from "@lcm/abis";
import { RsaSignUp } from "@lcm/data/constants";
import { toast } from "react-hot-toast";
import Loader from "../Loader";
import UserProfile from "../UserProfile";
import SignupCard from "./SignupCard";
import WalletSelector from "./WalletSelector";

interface LoginProps {
  setHasProfiles: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ setHasProfiles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggingInProfileId, setLoggingInProfileId] = useState<null | string>(
    null
  );

  const [profile, setProfile] = useState(null);

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const chain = useChainId();
  const { disconnect } = useDisconnect();
  const { address, connector: activeConnector } = useAccount();
  const { signMessageAsync } = useSignMessage({ mutation: { onError } });

  const lastLoggedInProfileRequest = {
    ownedBy: address
  };

  const { data: profilesManaged, loading: profilesManagedLoading } =
    useProfilesManagedQuery({
      fetchPolicy: "no-cache", // 强制从网络获取数据
      returnPartialData: true,
      onCompleted: (data) => {
        setHasProfiles(data?.profiles.length > 0);
      },
      skip: !address,
      variables: lastLoggedInProfileRequest
    });
  const { error, writeContractAsync } = useWriteContract({
    mutation: { onError: (e) => onuErrored(e), onSuccess: () => onuCompleted() }
  });
  const onuCompleted = (hash) => {
    console.log(hash);
  };
  const onuErrored = (e) => {
    console.trace(e);
    toast.error("Failed to sign up");
    throw "Failed to sign up";
  };
  const write = async ({ args }: { args: any[] }) => {
    return await writeContractAsync({
      abi: RsaSignUpABI,
      address: RsaSignUp,
      args,
      functionName: "signup"
    });
  };
  const handleSign = async (profile: Profile) => {
    try {
      setProfile(profile);
      setLoggingInProfileId(profile?.id || null);
      setIsLoading(true);

      const _sha256Addr = sha256(address);
      // Get signature
      const signature = await signMessageAsync({
        message:
          "XMTP : Enable ldentity" +
          `\n${_sha256Addr}` +
          "\n\nFor more info:\nhttps://ctblock.cn/signatures/"
      });

      // 这里进行判断
      if (!profile.signInfo?.publicKey) {
        const { signInfo } = await upSignInfo(signature, profile);

        profile.signInfo = signInfo;
        await write({
          args: ["0x" + signInfo.encPrivateKey, "0x" + signInfo.publicKey]
        });
      } else {
        signIn({ authSign: signature, profile: profile });
        console.log(AUTH.LOGIN, { profile_id: profile?.id, source: "login" });
        location.reload();
      }
    } catch {}
  };
  const allProfiles = profilesManaged?.profiles || [];
  const lastLogin = profilesManaged?.lastLoggedInProfiles[0]?.profile || [];

  const remainingProfiles = lastLogin
    ? allProfiles.filter((profile) => profile?.id !== lastLogin.id)
    : allProfiles;

  const profiles = lastLogin
    ? remainingProfiles.concat(lastLogin)
    : remainingProfiles;
  return activeConnector?.id ? (
    <div className="space-y-3">
      <div className="space-y-2.5">
        {chain === CHAIN.id ? (
          profilesManagedLoading ? (
            <Card className="w-full dark:divide-gray-700" forceRounded>
              <Loader
                className="my-4"
                message="正在加载由您管理的身份..."
                small
              />
            </Card>
          ) : profiles.length > 0 ? (
            <Card
              className="max-h-[50vh] w-full overflow-y-auto dark:divide-gray-700"
              forceRounded
            >
              {profiles.map((profile) => (
                <div
                  className="flex items-center justify-between p-3"
                  key={profile?.id}
                >
                  <UserProfile
                    hideFollowButton
                    hideUnfollowButton
                    linkToProfile={false}
                    profile={profile as Profile}
                    showUserPreview={false}
                  />
                  <Button
                    disabled={isLoading && loggingInProfileId === profile?.id}
                    onClick={() => handleSign(profile)}
                    outline
                  >
                    登录
                  </Button>
                </div>
              ))}
            </Card>
          ) : (
            <SignupCard />
          )
        ) : (
          <SwitchNetwork toChainId={CHAIN.id} />
        )}
        <button
          className="flex items-center space-x-1 text-sm underline"
          onClick={() => {
            disconnect?.();
            console.log(AUTH.CHANGE_WALLET);
          }}
          type="reset"
        >
          <KeyIcon className="size-4" />
          <div>更换钱包</div>
        </button>
      </div>
    </div>
  ) : (
    <WalletSelector />
  );
};

export default Login;
