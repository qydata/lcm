import type { FC } from "react";

import IndexStatus from "@components/Shared/IndexStatus";
import errorToast from "@helpers/errorToast";

import {
  ExclamationTriangleIcon,
  LockOpenIcon
} from "@heroicons/react/24/outline";
import { LensHub } from "@lcm/abis";
import { LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { SETTINGS } from "@lcm/data/tracking";
import {
  Button,
  Card,
  CardHeader,
  H5,
  Modal,
  Spinner,
  WarningMessage
} from "@lcm/ui";
import { useState } from "react";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useWriteContract } from "wagmi";

const ProfileGuardianSettings: FC = () => {
  const { currentProfile } = useProfileStore();
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleWrongNetwork = useHandleWrongNetwork();

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { data, writeContractAsync } = useWriteContract({
    mutation: {
      onError: (error: Error) => onError(error),
      onSuccess: () => console.log(SETTINGS.DANGER.UNPROTECT_PROFILE)
    }
  });

  const write = async () => {
    return await writeContractAsync({
      abi: LensHub,
      address: LENS_HUB,
      functionName: "DANGER__disableTokenGuardian"
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

  if (!currentProfile?.guardian?.protected) {
    return null;
  }

  return (
    <Card>
      <CardHeader
        body="This will disable the Profile Guardian and allow you to do some actions like transfer, burn and approve without restrictions."
        title={<div className="text-red-500">禁用个人资料保护者</div>}
      />
      <div className="m-5 space-y-5">
        <H5>您还应该了解这些</H5>
        <div className="ld-text-gray-500 divide-y text-sm dark:divide-gray-700">
          <p className="pb-3">
            个人资料需要经过 7 天的安全冷却时间 Guardian 实际上已禁用。
          </p>
          <p className="py-3">
            有效禁用 Profile Guardian 后，您将能够 不受限制地执行审批和传输。
          </p>
        </div>
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
              ) : (
                <LockOpenIcon className="size-5" />
              )
            }
            onClick={() => setShowWarningModal(true)}
            variant="danger"
          >
            {isLoading ? "Disabling..." : "Disable now"}
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
                确认您已阅读所有后果并希望禁用 Profile Guardian
                （个人资料监护人）。
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

export default ProfileGuardianSettings;
