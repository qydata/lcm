import type { FC } from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@lcm/ui";

interface ProProps {
  id: string;
}

const Pro: FC<ProProps> = ({ id }) => {
  const { data } = {};
  if (!data?.isPro) {
    return null;
  }

  return (
    <Tooltip content="Pro">
      <StarIcon className="size-6 text-yellow-500" />
    </Tooltip>
  );
};

export default Pro;
