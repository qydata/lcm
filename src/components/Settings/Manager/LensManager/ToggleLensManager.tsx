import type { FC } from "react";
import { useState } from "react";

import IndexStatus from "@components/Shared/IndexStatus";
import errorToast from "@helpers/errorToast";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { LensHub } from "@lcm/abis";
import { LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { SETTINGS } from "@lcm/data/tracking";
import checkDispatcherPermissions from "@lcm/helpers/checkDispatcherPermissions";
import { useCreateChangeProfileManagersTypedDataMutation } from "@lcm/lens";
import { Button, Spinner } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useNonceStore } from "src/store/non-persisted/useNonceStore";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useWriteContract } from "wagmi";

interface ToggleLensManagerProps {
  buttonSize?: "sm";
}

const ToggleLensManager: FC<ToggleLensManagerProps> = ({
  buttonSize = "md"
}) => {
  const { currentProfile } = useProfileStore();
  const { isSuspended } = useProfileStatus();
  const {
    decrementLensHubOnchainSigNonce,
    incrementLensHubOnchainSigNonce,
    lensHubOnchainSigNonce
  } = useNonceStore();
  const [isLoading, setIsLoading] = useState(false);
  const handleWrongNetwork = useHandleWrongNetwork();

  const { canBroadcast, canUseSignless } =
    checkDispatcherPermissions(currentProfile);

  const onCompleted = (__typename?: "RelayError" | "RelaySuccess") => {
    if (__typename === "RelayError") {
      return;
    }

    setIsLoading(false);
    toast.success("Profile updated successfully!");
    console.log(SETTINGS.MANAGER.TOGGLE);
  };

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { data: writeHash, writeContractAsync } = useWriteContract({
    mutation: {
      onError: (error: Error) => {
        onError(error);
        decrementLensHubOnchainSigNonce();
      },
      onSuccess: () => {
        onCompleted();
        incrementLensHubOnchainSigNonce();
      }
    }
  });

  const write = async ({ args }: { args: any[] }) => {
    return await writeContractAsync({
      abi: LensHub,
      address: LENS_HUB,
      args,
      functionName: "changeDelegatedExecutorsConfig"
    });
  };

  const createChangeProfileManagersTypedData =
    useCreateChangeProfileManagersTypedDataMutation({
      onCompleted: async ({ createChangeProfileManagersTypedData }) => {
        const { typedData } = createChangeProfileManagersTypedData;
        const {
          approvals,
          configNumber,
          delegatedExecutors,
          delegatorProfileId,
          switchToGivenConfig
        } = typedData.value;
        const args = [
          delegatorProfileId,
          delegatedExecutors,
          approvals,
          configNumber,
          switchToGivenConfig
        ];
        await handleWrongNetwork();

        return await write({ args });
      },
      onError
    });

  const toggleDispatcher = async () => {
    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      setIsLoading(true);
      return await createChangeProfileManagersTypedData();
    } catch (error) {
      onError(error);
    }
  };

  const broadcastTxId =
    broadcastData?.broadcastOnchain.__typename === "RelaySuccess" &&
    broadcastData.broadcastOnchain.txId;

  return writeHash || broadcastTxId ? (
    <div className="mt-2">
      <IndexStatus reload txHash={writeHash} txId={broadcastTxId} />
    </div>
  ) : (
    <Button
      className={cn({ "text-sm": buttonSize === "sm" }, "mr-auto")}
      disabled={isLoading}
      icon={
        isLoading ? (
          <Spinner size="xs" variant={canUseSignless ? "danger" : "primary"} />
        ) : canUseSignless ? (
          <XMarkIcon className="size-4" />
        ) : (
          <CheckCircleIcon className="size-4" />
        )
      }
      onClick={toggleDispatcher}
      variant={canUseSignless ? "danger" : "primary"}
    >
      {canUseSignless ? "禁用" : "启用"}
    </Button>
  );
};

export default ToggleLensManager;
