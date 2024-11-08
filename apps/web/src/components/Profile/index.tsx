import type {Profile} from "@hey/lens";
import {useProfileQuery} from "@hey/lens";
import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import NewPost from "@components/Composer/NewPost";
import Cover from "@components/Shared/Cover";
import {Leafwatch} from "@helpers/leafwatch";
import {APP_NAME, HANDLE_PREFIX, STATIC_IMAGES_URL} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import getProfile from "@hey/helpers/getProfile";
import {GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {ProfileFeedType} from "src/enums";
import Custom404 from "src/pages/404";
import Custom500 from "src/pages/500";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import Details from "./Details";
import Feed from "./Feed";
import FeedType from "./FeedType";
import ProfilePageShimmer from "./Shimmer";

const ViewProfile: NextPage = () => {
    const {
        isReady,
        pathname,
        query: {handle, id, source, type}
    } = useRouter();
    const {currentProfile} = useProfileStore();

    useEffect(() => {
        if (isReady) {
            console.log(PAGEVIEW, {
                page: "profile",
                subpage: pathname
                    .replace("/u/[handle]", "")
                    .replace("/profile/[id]", ""),
                ...(source ? {source} : {})
            });
        }
    }, [handle, id]);

    const lowerCaseProfileFeedType = [
        ProfileFeedType.Media.toLowerCase(),
    ];

    const feedType = type
        ? lowerCaseProfileFeedType.includes(type as string)
            ? type.toString().toUpperCase()
            : ProfileFeedType.Media
        : ProfileFeedType.Media;

    const {
        data,
        error,
        loading: profileLoading
    } = useProfileQuery({
        fetchPolicy: 'no-cache', // 强制从网络获取数据
        returnPartialData: true,
        variables: {
            fullHandle: `${HANDLE_PREFIX}${handle}`
        }
    });

    const profile = data?.profiles[0] as Profile;

    const {data: profileDetails, isLoading: profileDetailsLoading} = useQuery({
        enabled: Boolean(profile?.id),
        queryKey: ["getProfileDetailsOnProfile", profile?.id]
    });

    if (!isReady || profileLoading) {
        return (
            <ProfilePageShimmer
                profileList={false}
            />
        );
    }

    if (!data?.profiles[0]) {
        return <Custom404/>;
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
                    `${STATIC_IMAGES_URL}/patterns/2.svg`
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
