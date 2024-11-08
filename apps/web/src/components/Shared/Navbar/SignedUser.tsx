import type {Profile} from "@hey/lens";
import type {FC} from "react";

import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import getAvatar from "@hey/helpers/getAvatar";

import getProfile from "@hey/helpers/getProfile";
import {Image} from "@hey/ui";
import cn from "@hey/ui/cn";
import {useGlobalModalStateStore} from "src/store/non-persisted/useGlobalModalStateStore";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import MenuTransition from "../MenuTransition";
import Slug from "../Slug";
import {NextLink} from "./MenuItems";
import MobileDrawerMenu from "./MobileDrawerMenu";
import AppVersion from "./NavItems/AppVersion";
import Logout from "./NavItems/Logout";
import OptimisticTransactions from "./NavItems/OptimisticTransactions";
import Settings from "./NavItems/Settings";
import SwitchProfile from "./NavItems/SwitchProfile";
import ThemeSwitch from "./NavItems/ThemeSwitch";
import YourProfile from "./NavItems/YourProfile";
import {useAccount} from "wagmi";

const SignedUser: FC = () => {
  const { currentProfile } = useProfileStore();
  const { setShowMobileDrawer, showMobileDrawer } = useGlobalModalStateStore();
  const {address} = useAccount();
  const Avatar = () => (
    <Image
      alt={currentProfile?.id}
      className="size-8 cursor-pointer rounded-full border dark:border-gray-700"
      onError={({ currentTarget }) => {
        currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
      }}
      src={getAvatar(currentProfile as Profile)}
    />
  );

  const openMobileMenuDrawer = () => {
    setShowMobileDrawer(true);
  };

  return (
    <>
      {showMobileDrawer ? <MobileDrawerMenu /> : null}
      <button
        className="focus:outline-none md:hidden"
        onClick={() => openMobileMenuDrawer()}
        type="button"
      >
        <Avatar />
      </button>
      <Menu as="div" className="hidden md:block">
        <MenuButton className="flex self-center rounded-full">
          <Avatar />
        </MenuButton>
        <MenuTransition>
          <MenuItems
            className="absolute right-0 mt-2 w-48 rounded-xl border bg-white py-1 shadow-sm focus:outline-none dark:border-gray-700 dark:bg-black"
            static
          >
            <MenuItem
              as={NextLink}
              className="m-2 flex items-center rounded-lg px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              href={getProfile(currentProfile).link}
            >
              <div className="flex w-full flex-col">
                <div>登录身份</div>
                <div className="truncate">
                  <Slug
                    className="font-bold"
                    slug={getProfile(currentProfile).slugWithPrefix}
                  />
                </div>
              </div>
            </MenuItem>
            <div className="divider" />
            <MenuItem
              as="div"
              className={({ focus }: { focus: boolean }) =>
                cn(
                  { "dropdown-active": focus },
                  "m-2 rounded-lg border dark:border-gray-700"
                )
              }
            >
              <SwitchProfile />
            </MenuItem>
            <div className="divider" />
            <MenuItem
              as={NextLink}
              className={({ focus }: { focus: boolean }) =>
                cn({ "dropdown-active": focus }, "menu-item")
              }
              href={getProfile(currentProfile).link}
            >
              <YourProfile />
            </MenuItem>
            <MenuItem
              as={NextLink}
              className={({ focus }: { focus: boolean }) =>
                cn({ "dropdown-active": focus }, "menu-item")
              }
              href="/settings"
            >
              <Settings />
            </MenuItem>
            <MenuItem
              as="div"
              className={({ focus }) =>
                cn({ "dropdown-active": focus }, "m-2 rounded-lg")
              }
            >
              <Logout />
            </MenuItem>
            <div className="divider" />
            <MenuItem
              as="div"
              className={({ focus }) =>
                cn({ "dropdown-active": focus }, "m-2 rounded-lg")
              }
            >
              <ThemeSwitch />
            </MenuItem>
            <MenuItem
              as="div"
              className={({ focus }) =>
                cn({ "dropdown-active": focus }, "m-2 rounded-lg")
              }
            >
              <OptimisticTransactions />
            </MenuItem>
            <div className="divider" />
            <AppVersion />
          </MenuItems>
        </MenuTransition>
      </Menu>
    </>
  );
};

export default SignedUser;
