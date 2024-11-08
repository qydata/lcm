import type { FC } from "react";

import Sidebar from "@components/Shared/Sidebar";
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  ClipboardIcon,
  CurrencyDollarIcon,
  UserIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";

const settingsSidebarItems = [
  {
    icon: <ClipboardIcon className="size-4" />,
    title: "Overview",
    url: "/staff"
  },
  {
    icon: <UserIcon className="size-4" />,
    title: "Users",
    url: "/staff/users"
  },
  {
    icon: <AdjustmentsHorizontalIcon className="size-4" />,
    title: "Permissions",
    url: "/staff/permissions"
  },
  {
    icon: <UserPlusIcon className="size-4" />,
    title: "注册",
    url: "/staff/signup"
  }
];

const StaffSidebar: FC = () => {
  return (
    <div className="mb-4 px-3 sm:px-0">
      <Sidebar items={settingsSidebarItems} />
    </div>
  );
};

export default StaffSidebar;
