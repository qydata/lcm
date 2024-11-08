import type {NextPage} from "next";

import NewPost from "@components/Composer/NewPost";
import {Leafwatch} from "@helpers/leafwatch";
import {HomeFeedType} from "@hey/data/enums";
import {PAGEVIEW} from "@hey/data/tracking";
import {GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect, useState} from "react";

import {useProfileStore} from "src/store/persisted/useProfileStore";

import FeedType from "./FeedType";
import ForYou from "./ForYou";
import Hero from "./Hero";
import Sidebar from "./Sidebar";

const Home: NextPage = () => {
    const {currentProfile} = useProfileStore();
    const [feedType, setFeedType] = useState<HomeFeedType>(HomeFeedType.FORYOU);

    useEffect(() => {
        console.log(PAGEVIEW, {page: "home"});
    }, []);

    const loggedInWithProfile = Boolean(currentProfile);

    return (
        <>
            {!loggedInWithProfile && <Hero/>}
            <GridLayout>
                {loggedInWithProfile ? (
                    <GridItemEight className="space-y-5">
                        <NewPost/>
                        <FeedType feedType={feedType} setFeedType={setFeedType}/>
                        {feedType === HomeFeedType.FORYOU ? (
                            <ForYou/>
                        ) : <></>}
                    </GridItemEight>
                ) : (
                    <GridItemFour>
                    </GridItemFour>
                )}
                <GridItemFour>
                    <Sidebar/>
                </GridItemFour>
            </GridLayout>
        </>
    );
};

export default Home;
