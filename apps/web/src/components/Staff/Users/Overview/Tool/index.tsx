import type { Profile } from "@hey/lens";
import type { FC } from "react";

import UserProfile from "@components/Shared/UserProfile";
import { getAuthApiHeaders } from "@helpers/getAuthApiHeaders";
import { IS_MAINNET } from "@hey/data/constants";
import getInternalPreferences from "@hey/helpers/api/getInternalPreferences";
import { useQuery } from "@tanstack/react-query";

import LeafwatchDetails from "./LeafwatchDetails";
import ManagedProfiles from "./ManagedProfiles";
import Permissions from "./Permissions";
import ProfileOverview from "./ProfileOverview";
import ProfilePreferences from "./ProfilePreferences";
import Rank from "./Rank";

interface ProfileStaffToolProps {
  profile: Profile;
}

const ProfileStaffTool: FC<ProfileStaffToolProps> = ({ profile }) => {
  const { data: preferences } = useQuery({
    queryFn: () => getInternalPreferences(profile?.id, getAuthApiHeaders()),
    queryKey: ["getInternalPreferences", profile?.id || ""]
  });

  return (
    <div>
      <UserProfile
        hideFollowButton
        hideUnfollowButton
        isBig
        linkToProfile
        profile={profile}
        showBio
        showUserPreview={false}
      />
      <ProfileOverview profile={profile} />
      {preferences ? <ProfilePreferences preferences={preferences} /> : null}
      {IS_MAINNET ? (
        <>
          <LeafwatchDetails profileId={profile?.id} />
          <div className="divider my-5 border-yellow-600 border-dashed" />
          <Rank
            address={profile.ownedBy}
            handle={profile.handle?.localName}
            lensClassifierScore={profile.stats.lensClassifierScore || 0}
            profileId={profile?.id}
          />
          <div className="divider my-5 border-yellow-600 border-dashed" />
        </>
      ) : null}
      {preferences ? (
        <>
          <Permissions
            permissions={preferences.permissions || []}
            profileId={profile?.id}
          />
          <div className="divider my-5 border-yellow-600 border-dashed" />
        </>
      ) : null}
      <ManagedProfiles address={profile.ownedBy} />
    </div>
  );
};

export default ProfileStaffTool;
