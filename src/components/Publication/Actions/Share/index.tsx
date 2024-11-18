import type { FC } from "react";
import { useState } from "react";

import type { Post } from "@components/Common/gated/graphql";
import MenuTransition from "@components/Shared/MenuTransition";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import hasOptimisticallyMirrored from "@helpers/optimistic/hasOptimisticallyMirrored";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { Spinner, Tooltip } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { motion } from "framer-motion";

interface ShareMenuProps {
  publication: Post;
  showCount: boolean;
}

const ShareMenu: FC<ShareMenuProps> = ({ publication, showCount }) => {
  const [isLoading, setIsLoading] = useState(false);
  const hasShared = hasOptimisticallyMirrored(publication.id);

  const iconClassName = "w-[15px] sm:w-[18px]";

  return (
    <div className="flex items-center space-x-1">
      <Menu as="div" className="relative">
        <MenuButton
          aria-label="Mirror"
          as={motion.button}
          className={cn(
            hasShared
              ? "text-brand-500 hover:bg-brand-300/20"
              : "ld-text-gray-500 hover:bg-gray-300/20",
            "rounded-full p-1.5 outline-offset-2"
          )}
          onClick={stopEventPropagation}
          whileTap={{ scale: 0.9 }}
        >
          {isLoading ? (
            <Spinner
              className="mr-0.5"
              size="xs"
              variant={hasShared ? "danger" : "primary"}
            />
          ) : (
            <Tooltip content={"Mirror or Quote"} placement="top" withDelay>
              <ArrowsRightLeftIcon className={iconClassName} />
            </Tooltip>
          )}
        </MenuButton>
        <MenuTransition>
          <MenuItems
            className="absolute z-[5] mt-1 w-max rounded-xl border bg-white shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            static
          ></MenuItems>
        </MenuTransition>
      </Menu>
    </div>
  );
};

export default ShareMenu;
