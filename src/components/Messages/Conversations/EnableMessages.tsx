import { loadKeys, storeKeys } from "@helpers/xmtp/keys";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { MESSAGES } from "@lcm/data/tracking";
import { Button, EmptyState } from "@lcm/ui";
import { Client, useClient } from "@xmtp/react-sdk";
import type { FC } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useWalletClient } from "wagmi";
// 创建一个 localStorage 适配器
const localStorageAdapter = {
  getItem: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};
const EnableMessages: FC = () => {
  const [initializeing, setInitializing] = useState(false);
  const { initialize } = useClient();
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const initXmtp = async () => {
    if (!address) {
      return;
    }

    try {
      setInitializing(true);

      let keys = loadKeys(address);
      if (!keys) {
        keys = await Client.getKeys(walletClient as any, { env: "production" });
        storeKeys(address, keys);
      }
      await initialize({
        keys,
        options: {
          env: "production",
          storage: localStorageAdapter
        },
        signer: walletClient as any
      });
      console.log(MESSAGES.ENABLE_MESSAGES);

      return toast.success("消息已成功启用");
    } catch (e) {
      console.log(e);
      toast.error(e.details);
      return;
    } finally {
      setInitializing(false);
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <EmptyState
        hideCard
        icon={<CursorArrowRaysIcon className="size-10" />}
        message="启用消息"
      />
      <Button disabled={initializeing} onClick={initXmtp}>
        启用
      </Button>
    </div>
  );
};

export default EnableMessages;
