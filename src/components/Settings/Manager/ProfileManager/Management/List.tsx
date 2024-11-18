import type {
  LastLoggedInProfileRequest,
  Profile,
  ProfilesManagedRequest
} from "@lcm/lens";
import type { FC } from "react";

import Loader from "@components/Shared/Loader";
import UserProfile from "@components/Shared/UserProfile";
import errorToast from "@helpers/errorToast";
import { UsersIcon } from "@heroicons/react/24/outline";
import {
  ManagedProfileVisibility,
  useHideManagedProfileMutation,
  useProfilesManagedQuery,
  useUnhideManagedProfileMutation
} from "@lcm/lens";
import { Button, EmptyState, ErrorMessage } from "@lcm/ui";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Virtuoso } from "react-virtuoso";
import { useAccount } from "wagmi";

interface ListProps {
  managed?: boolean;
}

const List: FC<ListProps> = ({ managed = false }) => {
  const { address } = useAccount();

  const lastLoggedInProfileRequest: LastLoggedInProfileRequest = {
    for: address
  };

  const profilesManagedRequest: ProfilesManagedRequest = {
    for: address,
    hiddenFilter: managed
      ? ManagedProfileVisibility.NoneHidden
      : ManagedProfileVisibility.HiddenOnly
  };

  const { data, error, fetchMore, loading, refetch } = useProfilesManagedQuery({
    fetchPolicy: "no-cache", // 强制从网络获取数据
    returnPartialData: true,
    variables: { lastLoggedInProfileRequest, profilesManagedRequest }
  });

  const [hideManagedProfile, { loading: hiding }] =
    useHideManagedProfileMutation();
  const [unhideManagedProfile, { loading: unhiding }] =
    useUnhideManagedProfileMutation();

  useEffect(() => {
    refetch();
  }, [managed, refetch]);

  const profilesManaged = data?.profiles;
  const pageInfo = data?.profilesManaged?.pageInfo;
  const hasMore = pageInfo?.next;

  const onEndReached = async () => {
    if (hasMore) {
      await fetchMore({
        variables: {
          lastLoggedInProfileRequest,
          profilesManagedRequest: {
            ...profilesManagedRequest,
            cursor: pageInfo.next
          }
        }
      });
    }
  };

  if (loading) {
    return <Loader className="my-10" />;
  }

  if (error) {
    return (
      <ErrorMessage
        error={error}
        title={
          managed
            ? "Failed to load managed profiles"
            : "Failed to load un-managed profiles"
        }
      />
    );
  }

  if (profilesManaged?.length === 0) {
    return (
      <EmptyState
        hideCard
        icon={<UsersIcon className="size-8" />}
        message={
          managed
            ? "You are not managing any profiles!"
            : "You are not un-managing any profiles!"
        }
      />
    );
  }

  const toggleManagement = async (profileId: string) => {
    try {
      if (managed) {
        await hideManagedProfile({ variables: { request: { profileId } } });
        toast.success("Profile is now un-managed");

        return refetch();
      }

      await unhideManagedProfile({ variables: { request: { profileId } } });
      toast.success("Profile is now managed");

      return refetch();
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <Virtuoso
      computeItemKey={(index, profile) => `${profile?.id}-${index}`}
      data={profilesManaged}
      endReached={onEndReached}
      itemContent={(_, profile) => (
        <div className="flex items-center justify-between py-2">
          <UserProfile
            hideFollowButton
            hideUnfollowButton
            profile={profile as Profile}
          />
          {address !== profile.ownedBy && (
            <Button
              disabled={hiding || unhiding}
              onClick={() => toggleManagement(profile?.id)}
              outline
              size="sm"
              variant="danger"
            >
              {managed ? "Un-manage" : "Manage"}
            </Button>
          )}
        </div>
      )}
      useWindowScroll
    />
  );
};

export default List;
