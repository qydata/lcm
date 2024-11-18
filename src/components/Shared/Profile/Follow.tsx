import type { FollowRequest, Profile } from "@lcm/lens";
import type { OptimisticTransaction } from "@lcm/types/misc";
import type { FC } from "react";

import errorToast from "@helpers/errorToast";

import { LensHub } from "@lcm/abis";
import { LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { PROFILE } from "@lcm/data/tracking";
import checkDispatcherPermissions from "@lcm/helpers/checkDispatcherPermissions";
import {
  useBroadcastOnchainMutation,
  useCreateFollowTypedDataMutation,
  useFollowMutation
} from "@lcm/lens";
import { useApolloClient } from "@lcm/lens/apollo";
import { OptmisticPublicationType } from "@lcm/types/enums";
import { Button } from "@lcm/ui";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";
import { useNonceStore } from "src/store/non-persisted/useNonceStore";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useTransactionStore } from "src/store/persisted/useTransactionStore";
import { useSignTypedData, useWriteContract } from "wagmi";

interface FollowProps {
  buttonClassName: string;
  profile: Profile;
  small: boolean;
  title: string;
}

const Follow: FC<FollowProps> = ({
  buttonClassName,
  profile,
  small,
  title
}) => {
  const { pathname } = useRouter();
  const { currentProfile } = useProfileStore();
  const { isSuspended } = useProfileStatus();
  const { incrementLensHubOnchainSigNonce, lensHubOnchainSigNonce } =
    useNonceStore();
  const { setShowAuthModal } = useGlobalModalStateStore();
  const { addTransaction, isUnfollowPending } = useTransactionStore();

  const [isLoading, setIsLoading] = useState(false);
  const handleWrongNetwork = useHandleWrongNetwork();
  const { cache } = useApolloClient();

  const { canBroadcast, canUseLensManager } =
    checkDispatcherPermissions(currentProfile);

  const generateOptimisticFollow = ({
    txHash,
    txId
  }: {
    txHash?: string;
    txId?: string;
  }): OptimisticTransaction => {
    return {
      followOn: profile?.id,
      txHash,
      txId,
      type: OptmisticPublicationType.Follow
    };
  };

  const updateCache = () => {
    cache.modify({
      fields: {
        isFollowedByMe: (existingValue) => {
          return { ...existingValue, value: true };
        }
      },
      id: cache.identify(profile.operations)
    });
  };

  const onCompleted = (
    __typename?: "LensProfileManagerRelayError" | "RelayError" | "RelaySuccess"
  ) => {
    if (
      __typename === "RelayError" ||
      __typename === "LensProfileManagerRelayError"
    ) {
      return;
    }

    updateCache();
    setIsLoading(false);
    toast.success("Followed successfully!");
    console.log(PROFILE.FOLLOW, { path: pathname, target: profile?.id });
  };

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { signTypedDataAsync } = useSignTypedData({ mutation: { onError } });
  const { writeContractAsync } = useWriteContract({
    mutation: {
      onError,
      onSuccess: (hash: string) => {
        addTransaction(generateOptimisticFollow({ txHash: hash }));
        onCompleted();
      }
    }
  });

  const write = async ({ args }: { args: any[] }) => {
    return await writeContractAsync({
      abi: LensHub,
      address: LENS_HUB,
      args,
      functionName: "follow"
    });
  };

  const [broadcastOnchain] = useBroadcastOnchainMutation({
    onCompleted: ({ broadcastOnchain }) => {
      if (broadcastOnchain.__typename === "RelaySuccess") {
        addTransaction(
          generateOptimisticFollow({ txId: broadcastOnchain.txId })
        );
      }
      onCompleted(broadcastOnchain.__typename);
    }
  });
  const [createFollowTypedData] = useCreateFollowTypedDataMutation({
    onCompleted: async ({ createFollowTypedData }) => {
      const { id, typedData } = createFollowTypedData;
      const {
        datas,
        followerProfileId,
        followTokenIds,
        idsOfProfilesToFollow
      } = typedData.value;
      const args = [
        followerProfileId,
        idsOfProfilesToFollow,
        followTokenIds,
        datas
      ];
      await handleWrongNetwork();

      return await write({ args });
    },
    onError
  });

  const [follow] = useFollowMutation({
    onCompleted: ({ follow }) => {
      if (follow.__typename === "RelaySuccess") {
        addTransaction(generateOptimisticFollow({ txId: follow.txId }));
      }
      onCompleted(follow.__typename);
    },
    onError
  });

  const followViaLensManager = async (request: FollowRequest) => {
    const { data } = await follow({ variables: { request } });
    if (data?.follow?.__typename === "LensProfileManagerRelayError") {
      await createFollowTypedData({ variables: { request } });
    }
    return;
  };

  const createFollow = async () => {
    if (!currentProfile) {
      setShowAuthModal(true);
      return;
    }

    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    try {
      setIsLoading(true);
      const request: FollowRequest = { follow: [{ profileId: profile?.id }] };

      if (canUseLensManager) {
        return await followViaLensManager(request);
      }

      return await createFollowTypedData({
        variables: {
          options: { overrideSigNonce: lensHubOnchainSigNonce },
          request
        }
      });
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Button
      aria-label={title}
      className={buttonClassName}
      disabled={isLoading || isUnfollowPending(profile?.id)}
      onClick={createFollow}
      outline
      size={small ? "sm" : "md"}
    >
      {title}
    </Button>
  );
};

export default Follow;
