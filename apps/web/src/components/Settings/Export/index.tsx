import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import NotLoggedIn from "@components/Shared/NotLoggedIn";

import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect} from "react";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import SettingsSidebar from "../Sidebar";
import Profile from "./Profile";
import Publications from "./Publications";

const ExportSettings: NextPage = () => {
  const { currentProfile } = useProfileStore();

  useEffect(() => {
    console.log(PAGEVIEW, { page: "settings", subpage: "export" });
  }, []);

  if (!currentProfile) {
    return <NotLoggedIn />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Account settings • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <Profile />
        <Publications />
      </GridItemEight>
    </GridLayout>
  );
};

export default ExportSettings;
