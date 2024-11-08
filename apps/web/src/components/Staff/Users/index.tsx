import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import {Leafwatch} from "@helpers/leafwatch";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect} from "react";
import Custom404 from "src/pages/404";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import StaffSidebar from "../Sidebar";
import List from "./List";

const Users: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const isStaff = false;

  useEffect(() => {
    console.log(PAGEVIEW, { page: "staff-tools", subpage: "users" });
  }, []);

  if (!currentProfile || !isStaff) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Staff Tools • Users • ${APP_NAME}`} />
      <GridItemFour>
        <StaffSidebar />
      </GridItemFour>
      <GridItemEight>
        <List />
      </GridItemEight>
    </GridLayout>
  );
};

export default Users;
