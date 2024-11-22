import type {FC} from "react";

import {APP_NAME} from "@lcm/data/constants";
import {Tooltip} from "@lcm/ui";

const HeyProfile: FC = () => {
  return (
    <Tooltip content={`Profile Created on ${APP_NAME}`} placement="top">
      <img
        alt={`Profile Created on ${APP_NAME} Badge`}
        className="drop-shadow-xl"
        height={75}
        src={`/images/badges/hey-profile.png`}
        width={75}
      />
    </Tooltip>
  );
};

export default HeyProfile;
