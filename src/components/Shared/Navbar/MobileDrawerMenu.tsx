import type { Profile } from "@lcm/lens";
import type { FC } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import getAvatar from "@lcm/helpers/getAvatar";

import getProfile from "@lcm/helpers/getProfile";
import { Image } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import Link from "next/link";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import { useAccount } from "wagmi";
import Slug from "../Slug";
import AppVersion from "./NavItems/AppVersion";
import Logout from "./NavItems/Logout";
import Settings from "./NavItems/Settings";
import Support from "./NavItems/Support";
import SwitchProfile from "./NavItems/SwitchProfile";
import ThemeSwitch from "./NavItems/ThemeSwitch";
import YourProfile from "./NavItems/YourProfile";

const MobileDrawerMenu: FC = () => {
  const { currentProfile } = useProfileStore();
  const { setShowMobileDrawer } = useGlobalModalStateStore();

  const closeDrawer = () => {
    setShowMobileDrawer(false);
  };

  const itemClass = "py-3 hover:bg-gray-100 dark:hover:bg-gray-800";
  const { address } = useAccount();
  return (
    <div className="no-scrollbar fixed inset-0 z-10 h-full w-full overflow-y-auto bg-gray-100 py-4 md:hidden dark:bg-black">
      <button className="px-5" onClick={closeDrawer} type="button">
        <XMarkIcon className="size-6" />
      </button>
      <div className="w-full space-y-2">
        <Link
          className="mt-2 flex items-center space-x-2 px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800"
          href={getProfile(currentProfile).link}
          onClick={closeDrawer}
        >
          <div className="flex w-full space-x-1.5">
            <Image
              alt={currentProfile?.id}
              className="size-12 cursor-pointer rounded-full border dark:border-gray-700"
              onError={({ currentTarget }) => {
                currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
              }}
              src={getAvatar(currentProfile as Profile)}
            />
            <div>
              Logged in as
              <div className="truncate">
                <Slug
                  className="font-bold"
                  slug={getProfile(currentProfile).slugWithPrefix}
                />
              </div>
            </div>
          </div>
        </Link>
        <div className="bg-white dark:bg-gray-900">
          <div className="divider" />
          <SwitchProfile className={cn(itemClass, "px-4")} />
          <div className="divider" />
        </div>
        <div className="bg-white dark:bg-gray-900">
          <div className="divider" />
          <div>
            <Link href={getProfile(currentProfile).link} onClick={closeDrawer}>
              <YourProfile className={cn(itemClass, "px-4")} />
            </Link>
            <Link href="/settings" onClick={closeDrawer}>
              <Settings className={cn(itemClass, "px-4")} />
            </Link>
            <ThemeSwitch
              className={cn(itemClass, "px-4")}
              onClick={closeDrawer}
            />
          </div>
          <div className="divider" />
        </div>
        <div className="bg-white dark:bg-gray-900">
          <div className="divider" />
          <Support className={cn(itemClass, "px-4")} />
          <div className="divider" />
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="divider" />
          <div className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <Logout
              className={cn(itemClass, "px-4 py-3")}
              onClick={closeDrawer}
            />
          </div>
          <div className="divider" />
        </div>
        {currentProfile ? <AppVersion /> : null}
      </div>
    </div>
  );
};

export default MobileDrawerMenu;
