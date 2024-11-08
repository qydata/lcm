import type {Profile} from "@hey/lens";
import {useProfileQuery} from "@hey/lens";
import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import Loader from "@components/Shared/Loader";
import StaffSidebar from "@components/Staff/Sidebar";
import ProfileStaffTool from "@components/Staff/Users/Overview/Tool";
import {Leafwatch} from "@helpers/leafwatch";
import {UserIcon} from "@heroicons/react/24/outline";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {Card, EmptyState, ErrorMessage, GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Custom404 from "src/pages/404";
import {useProfileStore} from "src/store/persisted/useProfileStore";

const Overview: NextPage = () => {
  const {
    isReady,
    query: { id }
  } = useRouter();
  const { currentProfile } = useProfileStore();
  const isStaff = false;

  useEffect(() => {
    console.log(PAGEVIEW, {
      page: "staff-tools",
      subpage: "user-overview"
    });
  }, []);

  const { data, error, loading } = useProfileQuery({
    skip: !id || !isReady,
    variables: { request: { forProfileId: id } }
  });
  const profile = data?.profile as Profile;

  if (!currentProfile || !isStaff) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Staff Tools • User Overview • ${APP_NAME}`} />
      <GridItemFour>
        <StaffSidebar />
      </GridItemFour>
      <GridItemEight>
        <Card className="!bg-yellow-300/20 border-yellow-600 border-dashed p-5">
          {loading ? (
            <Loader className="my-5" message="Loading profile" />
          ) : !profile ? (
            <EmptyState
              hideCard
              icon={<UserIcon className="size-8" />}
              message="No profile found"
            />
          ) : error ? (
            <ErrorMessage error={error} />
          ) : (
            <ProfileStaffTool profile={profile} />
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  );
};

export default Overview;
