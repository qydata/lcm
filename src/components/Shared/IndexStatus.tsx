import type { FC } from "react";
import { useEffect, useState } from "react";
import type { Address } from "viem";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Spinner } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { useWaitForTransactionReceipt } from "wagmi";

interface IndexStatusProps {
  message?: string;
  reload?: boolean;
  txHash?: Address;
  txId?: string;
}

const IndexStatus: FC<IndexStatusProps> = ({
  message = "交易正在索引...",
  reload = false,
  txHash,
  txId
}) => {
  const [hide, setHide] = useState(false);

  // 使用 useWaitForTransaction 钩子根据交易哈希查询交易状态
  const { data, isError, isLoading, isPending, isSuccess } =
    useWaitForTransactionReceipt({
      hash: txHash, // 传入你要查询的交易哈希
      enabled: !!txHash, // 如果没有哈希值，禁用监听
      confirmations: 2 // 等待至少2次确认
    });
  useEffect(() => {
    console.log(data, isError, isLoading, isPending, isSuccess);
    if (isLoading == false && data) {
      if (data?.status === "success") {
        if (reload) {
          location.reload();
        }
        setTimeout(() => {
          setHide(true);
        }, 5000);
      }
    }
  }, [data, isError, isLoading, isPending, isSuccess]);
  const getStatusContent = () => {
    if (isLoading || isPending) {
      return (
        <div className="flex items-center space-x-1.5">
          <Spinner size="xs" />
          <div>{message}</div>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex items-center space-x-1.5">
          <XCircleIcon className="size-5 text-red-500" />
          <div>索引失败</div>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-1">
        <CheckCircleIcon className="size-5 text-green-500" />
        <div className="text-black dark:text-white">索引成功</div>
      </div>
    );
  };

  return (
    <span className={cn({ hidden: hide }, "ml-auto font-medium text-sm")}>
      {getStatusContent()}
    </span>
  );
};

export default IndexStatus;
