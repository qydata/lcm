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
import HeyRevenue from "./HeyRevenue";

const Stats: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const isStaff = false;

  useEffect(() => {
    console.log(PAGEVIEW, { page: "staff-tools", subpage: "stats" });
  }, []);

  if (!currentProfile || !isStaff) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Staff Tools • Stats • ${APP_NAME}`} />
      <GridItemFour>
        <StaffSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <HeyRevenue />
      </GridItemEight>
    </GridLayout>
  );
};

export default Stats;
