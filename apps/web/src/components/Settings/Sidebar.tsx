import type {Profile} from "@hey/lens";
import type {FC} from "react";

import Sidebar from "@components/Shared/Sidebar";
import UserProfile from "@components/Shared/UserProfile";
import {
    AtSymbolIcon,
    CircleStackIcon,
    CpuChipIcon,
    ExclamationTriangleIcon,
    SparklesIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import {useProStore} from "src/store/non-persisted/useProStore";
import {useProfileStore} from "src/store/persisted/useProfileStore";

const SettingsSidebar: FC = () => {
    const {currentProfile} = useProfileStore();

    const settingsSidebarItems = [
        {
            icon: <UserIcon className="size-4"/>,
            title: "个人资料",
            url: "/settings"
        },
        {
            icon: <AtSymbolIcon className="size-4"/>,
            title: "身份标识",
            url: "/settings/handles"
        },
        {
            icon: <SparklesIcon className="size-4"/>,
            title: "清理",
            url: "/settings/cleanup"
        },
        {
            icon: <CircleStackIcon className="size-4"/>,
            title: "导出",
            url: "/settings/export"
        },
        {
            icon: <ExclamationTriangleIcon className="size-4 text-red-500"/>,
            title: <div className="text-red-500">危险区域</div>,
            url: "/settings/danger"
        }
    ];

    return (
        <div className="mb-4 px-3 sm:px-0">
            <div className="pb-3">
                <UserProfile
                    hideFollowButton
                    hideUnfollowButton
                    profile={currentProfile as Profile}
                    showUserPreview={false}
                />
            </div>
            <Sidebar items={settingsSidebarItems}/>
        </div>
    );
};

export default SettingsSidebar;
