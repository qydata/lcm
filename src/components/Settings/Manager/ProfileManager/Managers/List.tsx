import type { ProfileManagersRequest } from "@lcm/lens";
import type { FC } from "react";
import type { Address } from "viem";

import Loader from "@components/Shared/Loader";
import WalletProfile from "@components/Shared/WalletProfile";
import errorToast from "@helpers/errorToast";

import { MinusCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { LensHub } from "@lcm/abis";
import { LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { SETTINGS } from "@lcm/data/tracking";
import checkDispatcherPermissions from "@lcm/helpers/checkDispatcherPermissions";
import {
  ChangeProfileManagerActionType,
  useBroadcastOnchainMutation,
  useCreateChangeProfileManagersTypedDataMutation,
  useProfileManagersQuery
} from "@lcm/lens";
import { useApolloClient } from "@lcm/lens/apollo";
import { Button, EmptyState, ErrorMessage, Spinner } from "@lcm/ui";
import { useState } from "react";
import toast from "react-hot-toast";
import { Virtuoso } from "react-virtuoso";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useNonceStore } from "src/store/non-persisted/useNonceStore";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useSignTypedData, useWriteContract } from "wagmi";

const List: FC = () => {
  const { currentProfile } = useProfileStore();
  const { isSuspended } = useProfileStatus();
  const { incrementLensHubOnchainSigNonce, lensHubOnchainSigNonce } =
    useNonceStore();
  const [removingAddress, setRemovingAddress] = useState<Address | null>(null);

  const handleWrongNetwork = useHandleWrongNetwork();
  const { cache } = useApolloClient();
  const { canBroadcast } = checkDispatcherPermissions(currentProfile);

  const onCompleted = (
    __typename?: "LensProfileManagerRelayError" | "RelayError" | "RelaySuccess"
  ) => {
    if (
      __typename === "RelayError" ||
      __typename === "LensProfileManagerRelayError"
    ) {
      return;
    }

    cache.evict({ id: `ProfilesManagedResult:${removingAddress}` });
    toast.success("Manager removed successfully!");
    console.log(SETTINGS.MANAGER.REMOVE_MANAGER);
  };

  const onError = (error: any) => {
    errorToast(error);
    setRemovingAddress(null);
  };

  const request: ProfileManagersRequest = { for: currentProfile?.id };
  const { data, error, fetchMore, loading } = useProfileManagersQuery({
    variables: { request }
  });

  const { signTypedDataAsync } = useSignTypedData({ mutation: { onError } });
  const { writeContractAsync } = useWriteContract({
    mutation: { onError, onSuccess: () => onCompleted() }
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
        incrementLensHubOnchainSigNonce();

        return await write({ args });
      },
      onError
    });

  const removeManager = async (address: Address) => {
    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      setRemovingAddress(address);
      return await createChangeProfileManagersTypedData({
        variables: {
          options: { overrideSigNonce: lensHubOnchainSigNonce },
          request: {
            changeManagers: [
              { action: ChangeProfileManagerActionType.Remove, address }
            ]
          }
        }
      });
    } catch (error) {
      onError(error);
    }
  };

  const profileManagers = data?.profileManagers.items.filter(
    (item) => !item.isLensManager
  );
  const pageInfo = data?.profileManagers?.pageInfo;
  const hasMore = pageInfo?.next;

  const onEndReached = async () => {
    if (hasMore) {
      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      });
    }
  };

  if (loading) {
    return <Loader className="my-10" />;
  }

  if (error) {
    return (
      <ErrorMessage error={error} title="Failed to load profile managers" />
    );
  }

  if (profileManagers?.length === 0) {
    return (
      <EmptyState
        hideCard
        icon={<UserCircleIcon className="size-8" />}
        message="No profile managers added!"
      />
    );
  }

  return (
    <Virtuoso
      computeItemKey={(index, manager) => `${manager.address}-${index}`}
      data={profileManagers}
      endReached={onEndReached}
      itemContent={(_, manager) => (
        <div className="flex items-center justify-between py-2">
          <WalletProfile address={manager.address} />
          <Button
            disabled={removingAddress === manager.address}
            icon={
              removingAddress === manager.address ? (
                <Spinner size="xs" />
              ) : (
                <MinusCircleIcon className="size-4" />
              )
            }
            onClick={() => removeManager(manager.address)}
            outline
          >
            Remove
          </Button>
        </div>
      )}
      useWindowScroll
    />
  );
};

export default List;
