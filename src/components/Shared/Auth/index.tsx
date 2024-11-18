import type { FC } from "react";

import Login from "@components/Shared/Auth/Login";
import { APP_NAME } from "@lcm/data/constants";
import { useState } from "react";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";
import { useAccount } from "wagmi";

import AuthMessage from "./AuthMessage";
import Signup from "./Signup";
import { SignupMessage } from "./Signup/ChooseHandle";

const NotConnected = () => (
  <AuthMessage
    description="与我们可用的钱包提供商联系或创建一个新的钱包提供商。"
    title="连接您的钱包。"
  />
);

const Auth: FC = () => {
  const { authModalType } = useGlobalModalStateStore();
  const [hasProfiles, setHasProfiles] = useState(true);
  const { isConnected } = useAccount();

  return (
    <div className="m-5">
      {authModalType === "signup" ? (
        <div className="space-y-5">
          {!isConnected && <NotConnected />}
          <Signup />
        </div>
      ) : (
        <div className="space-y-5">
          {isConnected ? (
            hasProfiles ? (
              <AuthMessage
                description={`${APP_NAME} 使用此签名来验证您是此地址的所有者。`}
                title="请在信息上签名。"
              />
            ) : (
              <SignupMessage />
            )
          ) : (
            <NotConnected />
          )}
          <Login setHasProfiles={setHasProfiles} />
        </div>
      )}
    </div>
  );
};

export default Auth;
