import type { Profile } from "@lcm/lens";
import type { FC } from "react";

import Loader from "@components/Shared/Loader";
import UserProfile from "@components/Shared/UserProfile";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProfileLinkSource, SEARCH } from "@lcm/data/tracking";
import getProfile from "@lcm/helpers/getProfile";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { useProfilesQuery } from "@lcm/lens";
import { H6 } from "@lcm/ui";
import { useRouter } from "next/router";
import { useSearchStore } from "src/store/persisted/useSearchStore";

interface RecentProfilesProps {
  onProfileClick: () => void;
}

const RecentProfiles: FC<RecentProfilesProps> = ({ onProfileClick }) => {
  const { push } = useRouter();
  const {
    addProfile: addToRecentProfiles,
    clearProfile,
    clearProfiles,
    profiles: recentProfiles
  } = useSearchStore();

  const { data, loading } = useProfilesQuery({
    skip: recentProfiles.length === 0,
    variables: { request: { where: { profileIds: recentProfiles } } }
  });

  if (recentProfiles.length === 0) {
    return null;
  }

  const profiles = data?.profiles?.items || [];

  return (
    <div>
      {loading ? (
        <Loader className="my-3" message="Loading recent profiles" small />
      ) : (
        <div>
          <div className="flex items-center justify-between px-4 pt-1 pb-2">
            <b>Recent</b>
            <button
              onClick={() => {
                clearProfiles();
                console.log(SEARCH.CLEAR_ALL_RECENT_SEARCH);
              }}
              type="button"
            >
              <H6 className="ld-text-gray-500">Clear all</H6>
            </button>
          </div>
          {profiles.map((profile) => (
            <div
              className="flex cursor-pointer items-center space-x-3 truncate px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              key={profile?.id}
              onClick={() => {
                addToRecentProfiles(profile?.id);
                push(getProfile(profile as Profile).link);
                onProfileClick();
              }}
            >
              <div className="w-full">
                <UserProfile
                  hideFollowButton
                  hideUnfollowButton
                  linkToProfile={false}
                  profile={profile as Profile}
                  showUserPreview={false}
                  source={ProfileLinkSource.RecentSearch}
                />
              </div>
              <button
                onClick={(event) => {
                  stopEventPropagation(event);
                  clearProfile(profile?.id);
                }}
                type="reset"
              >
                <XMarkIcon className="size-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="divider my-2" />
    </div>
  );
};

export default RecentProfiles;
