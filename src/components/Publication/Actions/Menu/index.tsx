import type { Post } from "@lcm/lens";
import type { FC } from "react";
import { Fragment } from "react";

import MenuTransition from "@components/Shared/MenuTransition";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import cn from "@lcm/ui/cn";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import CopyPostText from "./CopyPostText";
import Delete from "./Delete";
import Report from "./Report";
import Share from "./Share";

interface PublicationMenuProps {
  publication: Post;
}

const PublicationMenu: FC<PublicationMenuProps> = ({
  publication,
  setShowSearch
}) => {
  const { currentProfile } = useProfileStore();
  const iconClassName = "w-[15px] sm:w-[18px]";

  return (
    <Menu as="div" className="relative">
      <MenuButton as={Fragment}>
        <button
          aria-label="More"
          className="rounded-full p-1.5 hover:bg-gray-300/20"
          onClick={stopEventPropagation}
          type="button"
        >
          <EllipsisHorizontalIcon
            className={cn("ld-text-gray-500", iconClassName)}
          />
        </button>
      </MenuButton>
      <MenuTransition>
        <MenuItems
          className="absolute right-0 z-[5] mt-1 w-max rounded-xl border bg-white shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          static
        >
          <div className="divider" />
          {currentProfile?.id === publication?.by?.id ? (
            <Share publication={publication} setShowSearch={setShowSearch} />
          ) : null}

          {/*<Translate publication={publication} />*/}
          <CopyPostText publication={publication} />
          <div className="divider" />
          {currentProfile?.id === publication?.by?.id ? (
            <Delete publication={publication} />
          ) : (
            <Report publication={publication} />
          )}
        </MenuItems>
      </MenuTransition>
    </Menu>
  );
};

export default PublicationMenu;
