import type { Profile } from "@lcm/lens";
import { useProfileQuery } from "@lcm/lens";
import type { FC } from "react";

import UserProfileShimmer from "./Shimmer/UserProfileShimmer";
import UserProfile from "./UserProfile";

interface LazyUserProfileProps {
  id: string;
}

const LazyUserProfile: FC<LazyUserProfileProps> = ({ id }) => {
  const { data, loading } = useProfileQuery({
    variables: { forProfileId: id }
  });

  if (loading) {
    return <UserProfileShimmer />;
  }

  if (!data?.profile) {
    return null;
  }

  return (
    <UserProfile
      hideFollowButton
      hideUnfollowButton
      profile={data.profile as Profile}
    />
  );
};

export default LazyUserProfile;
