import MetaTags from "@components/Common/MetaTags";
import { APP_NAME } from "@lcm/data/constants";
import { GridLayout } from "@lcm/ui";
import { GridItemTwelve } from "@lcm/ui/src/GridLayout";
import type { NextPage } from "next";
import NewTicket from "./NewTicket";

const Support: NextPage = () => {
  return (
    <GridLayout>
      <MetaTags title={`Support • ${APP_NAME}`} />
      <GridItemTwelve>
        <NewTicket />
      </GridItemTwelve>
    </GridLayout>
  );
};

export default Support;
