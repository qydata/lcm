import type { NextPage } from "next";

import NewPost from "@components/Composer/NewPost";
import { HomeFeedType } from "@lcm/data/enums";
import { PAGEVIEW } from "@lcm/data/tracking";
import { GridItemEight, GridItemFour, GridLayout } from "@lcm/ui";
import { useEffect, useState } from "react";

import { useProfileStore } from "src/store/persisted/useProfileStore";

import Auth from "@components/Shared/Auth";
import FeedType from "./FeedType";
import ForYou from "./ForYou";
import Hero from "./Hero";
import Sidebar from "./Sidebar";

const Home: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const [feedType, setFeedType] = useState<HomeFeedType>(HomeFeedType.FORYOU);

  useEffect(() => {
    console.log(PAGEVIEW, { page: "home" });
  }, []);

  const loggedInWithProfile = Boolean(currentProfile);

  return (
    <>
      {/*{!loggedInWithProfile && <Hero/>}*/}
      <GridLayout className={loggedInWithProfile ? "" : "content-center"}>
        {loggedInWithProfile ? (
          <>
            <GridItemEight className="space-y-5">
              <NewPost />
              <FeedType feedType={feedType} setFeedType={setFeedType} />
              {feedType === HomeFeedType.FORYOU ? <ForYou /> : <></>}
            </GridItemEight>

            <GridItemFour>
              <Sidebar />
            </GridItemFour>
          </>
        ) : (
          <>
            <GridItemEight>
              <Hero />
            </GridItemEight>
            <GridItemFour>
              <div className={`font-bold text-2xl`}>登录</div>
              <Auth />
            </GridItemFour>
          </>
        )}
      </GridLayout>
    </>
  );
};

export default Home;
