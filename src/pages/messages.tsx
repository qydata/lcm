import Messages from "@components/Messages";
import { XMTPProvider, reactionContentTypeConfig } from "@xmtp/react-sdk";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import Custom404 from "./404";

const contentTypeConfigs = [reactionContentTypeConfig];

const XMTPMessages = () => {
  const { currentProfile } = useProfileStore();

  if (!currentProfile) {
    // return <Custom404 />;
    return  <div className="page-center flex-col">请先登录</div>;
  }

  return (
      <XMTPProvider contentTypeConfigs={contentTypeConfigs}>
      <Messages />
    </XMTPProvider>
  );
};

export default XMTPMessages;
