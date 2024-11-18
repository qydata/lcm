import type { Profile } from "@lcm/lens";
import type { FC } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { PROFILE } from "@lcm/data/tracking";
import { useDismissRecommendedProfilesMutation } from "@lcm/lens";

interface DismissRecommendedProfileProps {
  profile: Profile;
}

const DismissRecommendedProfile: FC<DismissRecommendedProfileProps> = ({
  profile
}) => {
  const [dismissRecommendedProfile] = useDismissRecommendedProfilesMutation({
    update: (cache) => {
      cache.evict({ id: cache.identify(profile) });
    },
    variables: { request: { dismiss: [profile?.id] } }
  });

  const handleDismiss = async () => {
    await dismissRecommendedProfile();
    console.log(PROFILE.DISMISS_RECOMMENDED_PROFILE, {
      target: profile?.id
    });
  };

  return (
    <button onClick={handleDismiss} type="reset">
      <XMarkIcon className="size-4 text-gray-500" />
    </button>
  );
};

export default DismissRecommendedProfile;
