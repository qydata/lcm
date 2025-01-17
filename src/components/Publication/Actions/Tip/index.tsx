import type { Post } from "@lcm/lens";
import type { FC } from "react";

import MenuTransition from "@components/Shared/MenuTransition";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { STATIC_IMAGES_URL } from "@lcm/data/constants";
import getPublicationTipById from "@lcm/helpers/getPublicationTipById";
import nFormatter from "@lcm/helpers/nFormatter";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { TipIcon } from "@lcm/icons";
import { Tooltip } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { motion } from "framer-motion";
import party from "party-js";
import { useRef } from "react";
import { useTipsStore } from "src/store/non-persisted/useTipsStore";

import Action from "./Action";

interface TipProps {
  publication: Post;
  showCount: boolean;
}

const Tip: FC<TipProps> = ({ publication, showCount }) => {
  const { publicationTips } = useTipsStore();
  const tip = getPublicationTipById(publicationTips, publication.id);
  const confettiDom = useRef<HTMLDivElement>(null);

  const triggerConfetti = () => {
    party.resolvableShapes["moneybag"] =
      `<img height="15" width="15" src="/images/emojis/money-bag.png" />`;
    party.resolvableShapes["moneywithwings"] =
      `<img height="15" width="15" src="/images/emojis/money-with-wings.png" />`;
    party.resolvableShapes["coin"] =
      `<img height="15" width="15" src="/images/emojis/coin.png" />`;
    party.sparkles(confettiDom.current as any, {
      count: 20,
      lifetime: 2,
      shapes: ["moneybag", "moneywithwings", "coin"]
    });
  };

  const iconClassName = showCount
    ? "w-[17px] sm:w-[20px]"
    : "w-[15px] sm:w-[18px]";

  return (
    <div className="flex items-center space-x-1">
      <Menu as="div" className="relative">
        <MenuButton
          aria-label="Tip"
          as={motion.button}
          className={cn(
            tip?.tipped
              ? "text-brand-500 hover:bg-brand-300/20"
              : "ld-text-gray-500 hover:bg-gray-300/20",
            "rounded-full p-1.5 outline-offset-2"
          )}
          onClick={stopEventPropagation}
          whileTap={{ scale: 0.9 }}
        >
          <div ref={confettiDom} />
          <Tooltip content="Tip" placement="top" withDelay>
            <TipIcon
              className={cn({ "text-brand-500": tip?.tipped }, iconClassName)}
            />
          </Tooltip>
        </MenuButton>
        <MenuTransition>
          <MenuItems
            className="absolute z-[5] mt-1 w-max rounded-xl border bg-white shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            static
          >
            <MenuItem>
              {({ close }) => (
                <Action
                  closePopover={close}
                  publication={publication}
                  triggerConfetti={triggerConfetti}
                />
              )}
            </MenuItem>
          </MenuItems>
        </MenuTransition>
      </Menu>
      {(tip?.count || 0) > 0 && !showCount && (
        <span
          className={cn(
            tip?.tipped ? "text-brand-500" : "ld-text-gray-500",
            "text-[11px] sm:text-xs"
          )}
        >
          {nFormatter(tip?.count || 0)}
        </span>
      )}
    </div>
  );
};

export default Tip;
