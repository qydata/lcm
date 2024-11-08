import type {FC} from "react";

import {ShieldCheckIcon} from "@heroicons/react/24/outline";
import {Tooltip} from "@hey/ui";
import Link from "next/link";

const ModIcon: FC = () => {
  const isGardener = false

  if (!isGardener) {
    return null;
  }

  return (
    <Tooltip content="Moderation" placement="bottom">
      <Link
        className="hidden rounded-md px-2 py-1 hover:bg-gray-300/20 md:flex"
        href="/mod"
      >
        <ShieldCheckIcon className="size-5 sm:size-6" />
      </Link>
    </Tooltip>
  );
};

export default ModIcon;
