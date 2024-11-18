import type { FC } from "react";

import HeyNft from "./HeyNft";
import HeyProfile from "./HeyProfile";

interface BadgesProps {
  id: string;
}

const Badges: FC<BadgesProps> = ({ id }) => {
  // Begin: Check has Lcm NFT
  const isHeyProfile = true;
  const hasHeyNft = true;

  return (
    <>
      <div className="divider w-full" />
      <div className="flex flex-wrap gap-3">
        {isHeyProfile && <HeyProfile />}
        {hasHeyNft && <HeyNft />}
      </div>
    </>
  );
};

export default Badges;
