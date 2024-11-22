import type {FC} from "react";

import Impressions from "./Impressions";
import ProfileStats from "./ProfileStats";

interface StatsProps {
  profileId: string;
}

const Stats: FC<StatsProps> = ({ profileId }) => {
  return (
    <div className="space-y-5">
      <ProfileStats profileId={profileId} />
      <Impressions profileId={profileId} />
    </div>
  );
};

export default Stats;
