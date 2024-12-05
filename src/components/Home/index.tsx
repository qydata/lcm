import type {NextPage} from "next";

import NewPost from "@components/Composer/NewPost";
import {HomeFeedType} from "@lcm/data/enums";
import {PAGEVIEW} from "@lcm/data/tracking";
import {GridItemEight, GridItemFour, GridLayout} from "@lcm/ui";
import {useEffect, useState} from "react";

import {useProfileStore} from "src/store/persisted/useProfileStore";
import FeedType from "./FeedType";
import ForYou from "./ForYou";
import Hero from "./Hero";
import SetProfile from "@components/Home/Sidebar/SetProfile";
import {GridItemTwo} from "@lcm/ui/src/GridLayout";

const Home: NextPage = () => {
    const {currentProfile} = useProfileStore();
    const [feedType, setFeedType] = useState<HomeFeedType>(HomeFeedType.FORYOU);

    useEffect(() => {
        console.log(PAGEVIEW, {page: "home"});
        console.log(window.MyNamespace);
    }, []);

    const loggedInWithProfile = Boolean(currentProfile);

    return (
        <>
            {/*{!loggedInWithProfile && <Hero/>}*/}
            <GridLayout className={loggedInWithProfile ? "" : "content-center"}>
                {loggedInWithProfile ? (
                    <>
                        <GridItemTwo>
                            <></>
                        </GridItemTwo>
                        <GridItemEight className="space-y-5">
                            <NewPost/>
                            <FeedType feedType={feedType} setFeedType={setFeedType}/>
                            {feedType === HomeFeedType.FORYOU ? <ForYou/> : <></>}
                        </GridItemEight>

                    </>
                ) : (
                    <>
                        <GridItemEight>
                            <Hero/>
                        </GridItemEight>
                    </>
                )}
            </GridLayout>
        </>
    );
};

export default Home;
