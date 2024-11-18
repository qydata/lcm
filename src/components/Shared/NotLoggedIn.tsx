import type { FC } from "react";

import MetaTags from "@components/Common/MetaTags";
import LoginButton from "@components/Shared/LoginButton";
import { APP_NAME } from "@lcm/data/constants";
import { H2 } from "@lcm/ui";

const NotLoggedIn: FC = () => {
  return (
    <div className="page-center flex-col">
      <MetaTags title={`Not logged in • ${APP_NAME}`} />
      <img
        alt="Logo"
        className="size-20"
        height={80}
        src="/logo.png"
        width={80}
      />
      <div className="py-10 text-center">
        <H2 className="mb-4">未登录！</H2>
        <div className="mb-4">登录以继续</div>
        <LoginButton isBig />
      </div>
    </div>
  );
};

export default NotLoggedIn;
