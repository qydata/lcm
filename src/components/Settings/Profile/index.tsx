import type { NextPage } from "next";

import MetaTags from "@components/Common/MetaTags";
import NotLoggedIn from "@components/Shared/NotLoggedIn";

import { APP_NAME } from "@lcm/data/constants";
import { PAGEVIEW } from "@lcm/data/tracking";
import { GridItemEight, GridItemFour, GridLayout } from "@lcm/ui";
import { useEffect } from "react";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import SettingsSidebar from "../Sidebar";
import ProfileSettingsForm from "./Profile";

const ProfileSettings: NextPage = () => {
  const { currentProfile } = useProfileStore();

  useEffect(() => {
    console.log(PAGEVIEW, { page: "settings", subpage: "profile" });
  }, []);

  if (!currentProfile) {
    return <NotLoggedIn />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Profile settings • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <ProfileSettingsForm />
      </GridItemEight>
    </GridLayout>
  );
};

export default ProfileSettings;
