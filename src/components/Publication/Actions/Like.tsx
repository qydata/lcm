import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Errors } from "@lcm/data/errors";
import nFormatter from "@lcm/helpers/nFormatter";
import { Tooltip } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { useCounter, useToggle } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import type { FC } from "react";
import toast from "react-hot-toast";
import { useProfileStatus } from "src/store/non-persisted/useProfileStatus";
import { useProfileStore } from "src/store/persisted/useProfileStore";

interface LikeProps {
  publication: Post;
  showCount: boolean;
}

const Like: FC<LikeProps> = ({ publication, showCount }) => {
  const { currentProfile } = useProfileStore();
  const { isSuspended } = useProfileStatus();

  const [hasReacted, toggleReact] = useToggle(
    publication.operations?.hasReacted
  );
  const [reactions, { decrement, increment }] = useCounter(
    publication.stats?.reactions
  );

  const createLike = async () => {
    if (!currentProfile) {
      return toast.error(Errors.SignWallet);
    }

    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    toggleReact();

    if (hasReacted) {
      decrement();
    }

    increment();
  };

  const iconClassName = showCount
    ? "w-[17px] sm:w-[20px]"
    : "w-[15px] sm:w-[18px]";

  return (
    <div
      className={cn(
        hasReacted ? "text-brand-500" : "ld-text-gray-500",
        "flex items-center space-x-1"
      )}
    >
      <motion.button
        aria-label="Like"
        className={cn(
          hasReacted ? "hover:bg-brand-300/20" : "hover:bg-gray-300/20",
          "rounded-full p-1.5 outline-offset-2"
        )}
        onClick={createLike}
        whileTap={{ scale: 0.9 }}
      >
        <Tooltip
          content={hasReacted ? "Unlike" : "Like"}
          placement="top"
          withDelay
        >
          {hasReacted ? (
            <HeartIconSolid className={iconClassName} />
          ) : (
            <HeartIcon className={iconClassName} />
          )}
        </Tooltip>
      </motion.button>
      {reactions > 0 && !showCount ? (
        <span className="text-[11px] sm:text-xs">{nFormatter(reactions)}</span>
      ) : null}
    </div>
  );
};

export default Like;
