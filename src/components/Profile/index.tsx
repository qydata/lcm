import type {Profile} from "@lcm/lens";
import {useProfileQuery} from "@lcm/lens";
import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import NewPost from "@components/Composer/NewPost";
import Cover from "@components/Shared/Cover";
import {APP_NAME} from "@lcm/data/constants";
import getProfile from "@lcm/helpers/getProfile";
import {GridItemEight, GridItemFour, GridLayout} from "@lcm/ui";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {ProfileFeedType} from "src/enums";
import Custom500 from "src/pages/500";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import Details from "./Details";
import Feed from "./Feed";
import FeedType from "./FeedType";
import ProfilePageShimmer from "./Shimmer";
import Hero from "@components/Home/Hero";

const ViewProfile: NextPage = () => {

    const {currentProfile} = useProfileStore();

    const loggedInWithProfile = Boolean(currentProfile);
    if (!loggedInWithProfile) {
        return <>
            {/*{!loggedInWithProfile && <Hero/>}*/}
            <GridLayout className={"content-center"}>
                <GridItemEight>
                    <Hero/>
                </GridItemEight>
            </GridLayout>
        </>;
    }

    const {
        isReady,
        query: {handle, id, source, type}
    } = useRouter();
    const lowerCaseProfileFeedType = [ProfileFeedType.Media.toLowerCase()];

    const feedType = type
        ? lowerCaseProfileFeedType.includes(type as string)
            ? type.toString().toUpperCase()
            : ProfileFeedType.Media
        : ProfileFeedType.Media;
    console.log(currentProfile)
    const {
        data,
        error,
        loading: profileLoading
    } = useProfileQuery({
        skip: false,
        fetchPolicy: "no-cache", // 强制从网络获取数据
        returnPartialData: true,
        variables: {
            fullHandle: `${currentProfile.handle.fullHandle}`
        }
    });

    const profile = data?.profiles[0] as Profile;

    const {data: profileDetails, isLoading: profileDetailsLoading} = useQuery({
        enabled: Boolean(profile?.id),
        queryKey: ["getProfileDetailsOnProfile", profile?.id]
    });

    if (!isReady || profileLoading) {
        return <ProfilePageShimmer profileList={false}/>;
    }

    if (error) {
        return <Custom500/>;
    }

    return (
        <>
            <MetaTags
                creator={getProfile(profile).displayName}
                description={profile.metadata?.bio}
                title={`${getProfile(profile).displayName} (${
                    getProfile(profile).slugWithPrefix
                }) • ${APP_NAME}`}
            />
            <Cover
                cover={
                    profile?.metadata?.coverPicture?.optimized?.uri ||
                    `/images/patterns/2.svg`
                }
            />
            <GridLayout>
                <GridItemFour>
                    <Details
                        isSuspended={profileDetails?.isSuspended || false}
                        profile={profile as Profile}
                    />
                </GridItemFour>
                <GridItemEight className="space-y-5">
                    <FeedType feedType={feedType as ProfileFeedType}/>
                    {currentProfile?.id === profile?.id ? <NewPost/> : null}
                    {feedType === ProfileFeedType.Media ? (
                        <Feed
                            handle={getProfile(profile).slugWithPrefix}
                            profileDetailsLoading={profileDetailsLoading}
                            profileId={profile.id}
                            type={feedType}
                        />
                    ) : null}
                </GridItemEight>
            </GridLayout>
        </>
    );
};

export default ViewProfile;
