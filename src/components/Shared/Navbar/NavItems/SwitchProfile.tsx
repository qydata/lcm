import type { FC } from "react";

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import cn from "@lcm/ui/cn";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";

interface SwitchProfileProps {
  className?: string;
}

const SwitchProfile: FC<SwitchProfileProps> = ({ className = "" }) => {
  const { setShowProfileSwitchModal } = useGlobalModalStateStore();

  return (
    <button
      className={cn(
        "flex w-full items-center space-x-2 px-2 py-1.5 text-left text-gray-700 text-sm focus:outline-none dark:text-gray-200",
        className
      )}
      onClick={() => setShowProfileSwitchModal(true)}
      type="button"
    >
      <ArrowsRightLeftIcon className="size-4" />
      <span>切换身份</span>
    </button>
  );
};

export default SwitchProfile;
