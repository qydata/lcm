import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import {Leafwatch} from "@helpers/leafwatch";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {Card, CardHeader, GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect} from "react";
import Custom404 from "src/pages/404";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import StaffSidebar from "../Sidebar";
import LensCredits from "./LensCredits";
import Mint from "./Mint";
import NftsMinted from "./NftsMinted";
import ProfilesCreated from "./ProfilesCreated";
import SignupPrice from "./SignupPrice";

const Signup: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const isStaff = false;

  useEffect(() => {
    console.log(PAGEVIEW, {
      page: "staff-tools",
      subpage: "singup"
    });
  }, []);

  if (!currentProfile || !isStaff) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Staff Tools • Signup • ${APP_NAME}`} />
      <GridItemFour>
        <StaffSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <Card>
          <CardHeader title="Signup Stats" />
          <div className="m-5 space-y-5">
            <LensCredits />
            <SignupPrice />
            <NftsMinted />
            <ProfilesCreated />
          </div>
        </Card>
        <Mint />
      </GridItemEight>
    </GridLayout>
  );
};

export default Signup;
