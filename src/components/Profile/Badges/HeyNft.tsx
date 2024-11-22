import type {FC} from "react";

import {APP_NAME} from "@lcm/data/constants";
import {Tooltip} from "@lcm/ui";

const HeyNft: FC = () => {
  return (
    <Tooltip content={`Owner of ${APP_NAME} NFT`} placement="top">
      <img
        alt={`Owner of ${APP_NAME} NFT Badge`}
        className="drop-shadow-xl"
        height={75}
        src={`/images/badges/hey-nft.png`}
        width={75}
      />
    </Tooltip>
  );
};

export default HeyNft;
