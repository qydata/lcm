import type { FC } from "react";

import IndexStatus from "@components/Shared/IndexStatus";
import errorToast from "@helpers/errorToast";

import {
  ExclamationTriangleIcon,
  LockClosedIcon,
  LockOpenIcon
} from "@heroicons/react/24/outline";
import { LensHandles } from "@hey/abis";
import { LENS_HANDLES } from "@hey/data/constants";
import { Errors } from "@hey/data/errors";
import { SETTINGS } from "@hey/data/tracking";
import {
  Button,
  Card,
  CardHeader,
  H5,
  Modal,
  Spinner,
  WarningMessage
} from "@hey/ui";
import { useState } from "react";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useWriteContract } from "wagmi";

const HandleGuardianSettings: FC = () => {
  const { currentProfile } = useProfileStore();
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleWrongNetwork = useHandleWrongNetwork();
  const isProtected = currentProfile?.handle?.guardian?.protected;

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { data, writeContractAsync } = useWriteContract({
    mutation: {
      onError: (error: Error) => onError(error),
      onSuccess: () => console.log(SETTINGS.DANGER.UNPROTECT_HANDLE)
    }
  });

  const write = async () => {
    return await writeContractAsync({
      abi: LensHandles,
      address: LENS_HANDLES,
      functionName: isProtected
        ? "DANGER__disableTokenGuardian"
        : "enableTokenGuardian"
    });
  };

  const handleDisable = async () => {
    if (!currentProfile) {
      return toast.error(Errors.SignWallet);
    }

    try {
      setIsLoading(true);
      await handleWrongNetwork();

      return await write();
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Card>
      <CardHeader
        body={
          isProtected
            ? "这将禁用 Handle Guardian 并允许您不受限制地执行一些操作，例如转移、销毁和批准。"
            : "这将启用 Handle Guardian 并限制您执行某些操作，例如 transfer、burn 和 approve。"
        }
        title={
          <div className="text-red-500">
            {isProtected ? "禁用" : "启用"} handle guardian （处理守护者）
          </div>
        }
      />
      <div className="m-5 space-y-5">
        {isProtected && (
          <>
            <H5>What else you should know</H5>
            <div className="ld-text-gray-500 divide-y text-sm dark:divide-gray-700">
              <p className="pb-3">
                需要经过 24 小时的安全冷却时间
                处理 Guardian 以使其有效禁用。
              </p>
              <p className="py-3">
                有效禁用 Handle Guardian 后，您将
                能够不受限制地执行审批和转移。
              </p>
            </div>
          </>
        )}
        {data ? (
          <div className="mt-5">
            <IndexStatus reload txHash={data} />
          </div>
        ) : (
          <Button
            disabled={isLoading}
            icon={
              isLoading ? (
                <Spinner size="xs" variant="danger" />
              ) : isProtected ? (
                <LockOpenIcon className="size-5" />
              ) : (
                <LockClosedIcon className="size-5" />
              )
            }
            onClick={() =>
              isProtected ? setShowWarningModal(true) : handleDisable()
            }
            variant="danger"
          >
            {isProtected
              ? isLoading
                ? "禁用中..."
                : "立即禁用"
              : isLoading
                ? "启用中..."
                : "立即启用"}
          </Button>
        )}
      </div>
      <Modal
        icon={<ExclamationTriangleIcon className="size-5" />}
        onClose={() => setShowWarningModal(false)}
        show={showWarningModal}
        title="危险区域"
      >
        <div className="space-y-3 p-5">
          <WarningMessage
            message={
              <div className="leading-6">
                确认您已阅读所有后果并希望禁用
                Handle Guardian 的 Guardian。
              </div>
            }
            title="是否确定？"
          />
          <Button
            icon={<LockOpenIcon className="size-5" />}
            onClick={async () => {
              setShowWarningModal(false);
              await handleDisable();
            }}
            variant="danger"
          >
            是的，禁用
          </Button>
        </div>
      </Modal>
    </Card>
  );
};

export default HandleGuardianSettings;
