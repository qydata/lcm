import type { Dispatch, FC, SetStateAction } from "react";

import SearchProfiles from "@components/Shared/SearchProfiles";
import errorToast from "@helpers/errorToast";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { LensHub } from "@lcm/abis";
import { ADDRESS_PLACEHOLDER, LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { SETTINGS } from "@lcm/data/tracking";
import checkDispatcherPermissions from "@lcm/helpers/checkDispatcherPermissions";
import {
  ChangeProfileManagerActionType,
  useBroadcastOnchainMutation,
  useCreateChangeProfileManagersTypedDataMutation
} from "@lcm/lens";
import { Button, Spinner } from "@lcm/ui";
import { useState } from "react";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useNonceStore } from "src/store/non-persisted/useNonceStore";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { isAddress } from "viem";
import { useSignTypedData, useWriteContract } from "wagmi";

interface AddProfileManagerProps {
  setShowAddManagerModal: Dispatch<SetStateAction<boolean>>;
}

const AddProfileManager: FC<AddProfileManagerProps> = ({
  setShowAddManagerModal
}) => {
  const { currentProfile } = useProfileStore();
  const { isSuspended } = useProfileStatus();
  const {
    decrementLensHubOnchainSigNonce,
    incrementLensHubOnchainSigNonce,
    lensHubOnchainSigNonce
  } = useNonceStore();
  const [manager, setManager] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWrongNetwork = useHandleWrongNetwork();
  const { canBroadcast } = checkDispatcherPermissions(currentProfile);

  const onCompleted = (__typename?: "RelayError" | "RelaySuccess") => {
    if (__typename === "RelayError") {
      return;
    }

    setIsLoading(false);
    setShowAddManagerModal(false);
    setManager("");
    toast.success("Manager added successfully!");
    console.log(SETTINGS.MANAGER.ADD_MANAGER);
  };

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { signTypedDataAsync } = useSignTypedData({ mutation: { onError } });
  const { writeContractAsync } = useWriteContract({
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

  const [broadcastOnchain] = useBroadcastOnchainMutation({
    onCompleted: ({ broadcastOnchain }) =>
      onCompleted(broadcastOnchain.__typename)
  });
  const [createChangeProfileManagersTypedData] =
    useCreateChangeProfileManagersTypedDataMutation({
      onCompleted: async ({ createChangeProfileManagersTypedData }) => {
        const { id, typedData } = createChangeProfileManagersTypedData;
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

        try {
          return await write({ args });
        } catch {
          // Fix for Safe wallets
          // TODO: Remove this once Lens supports Safe wallets
          return await write({ args });
        }
      },
      onError
    });

  const addManager = async () => {
    if (!currentProfile) {
      return toast.error(Errors.SignWallet);
    }

    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      setIsLoading(true);
      return await createChangeProfileManagersTypedData({
        variables: {
          options: { overrideSigNonce: lensHubOnchainSigNonce },
          request: {
            changeManagers: [
              { action: ChangeProfileManagerActionType.Add, address: manager }
            ]
          }
        }
      });
    } catch (error) {
      onError(error);
    }
  };

  return (
    <div className="space-y-4 p-5">
      <SearchProfiles
        error={manager.length > 0 && !isAddress(manager)}
        hideDropdown={isAddress(manager)}
        onChange={(event) => setManager(event.target.value)}
        onProfileSelected={(profile) => setManager(profile.ownedBy)}
        placeholder={`${ADDRESS_PLACEHOLDER} or wagmi`}
        value={manager}
      />
      <div className="flex">
        <Button
          className="ml-auto"
          disabled={isLoading || !isAddress(manager)}
          icon={
            isLoading ? (
              <Spinner size="xs" />
            ) : (
              <PlusCircleIcon className="size-4" />
            )
          }
          onClick={addManager}
          type="submit"
        >
          Add manager
        </Button>
      </div>
    </div>
  );
};

export default AddProfileManager;
