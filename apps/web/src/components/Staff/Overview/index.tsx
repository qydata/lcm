import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import {Leafwatch} from "@helpers/leafwatch";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {Card, GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect} from "react";
import Custom404 from "src/pages/404";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import StaffSidebar from "../Sidebar";
import LeafwatchStats from "./LeafwatchStats";
import Links from "./Links";

const Overview: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const isStaff = false;

  useEffect(() => {
    console.log(PAGEVIEW, { page: "staff-tools", subpage: "overview" });
  }, []);

  if (!currentProfile || !isStaff) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Staff Tools • Overview • ${APP_NAME}`} />
      <GridItemFour>
        <StaffSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <Card>
          <LeafwatchStats />
        </Card>
        <Card className="p-5">
          <Links />
        </Card>
      </GridItemEight>
    </GridLayout>
  );
};

export default Overview;
