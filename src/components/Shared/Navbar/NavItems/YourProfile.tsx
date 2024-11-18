import type { FC } from "react";

import { UserIcon } from "@heroicons/react/24/outline";
import cn from "@lcm/ui/cn";

interface YourProfileProps {
  className?: string;
}

const YourProfile: FC<YourProfileProps> = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "flex w-full items-center space-x-1.5 text-gray-700 text-sm dark:text-gray-200",
        className
      )}
    >
      <UserIcon className="size-4" />
      <div>你的身份</div>
    </div>
  );
};

export default YourProfile;
