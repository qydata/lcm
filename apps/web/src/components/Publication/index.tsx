import {usePublicationQuery} from "@hey/lens";
import type {NextPage} from "next";
import MetaTags from "@components/Common/MetaTags";
import CommentSuspendedWarning from "@components/Shared/CommentSuspendedWarning";
import Footer from "@components/Shared/Footer";
import UserProfile from "@components/Shared/UserProfile";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW, ProfileLinkSource} from "@hey/data/tracking";
import getProfile from "@hey/helpers/getProfile";
import getPublicationData from "@hey/helpers/getPublicationData";
import {Card, GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Custom404 from "src/pages/404";
import Custom500 from "src/pages/500";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import FullPublication from "./FullPublication";
import PublicationPageShimmer from "./Shimmer";
import {Post} from "@components/Common/gated/graphql";


const ViewPublication: NextPage = () => {
    const {
        isReady,
        pathname,
        query: {id}
    } = useRouter();

    const {currentProfile} = useProfileStore();
    const {isCommentSuspended, isSuspended} = useProfileStatus();

    const showQuotes = pathname === "/posts/[id]/quotes";
    const showLikes = pathname === "/posts/[id]/likes";

    useEffect(() => {
        console.log(PAGEVIEW, {
            page: "publication",
            subpage: pathname.replace("/posts/[id]", "")
        });
    }, []);

    const {data, error, loading} = usePublicationQuery({
        skip: !id,
        variables: {forId: id}
    });

    if (!isReady || loading) {
        return (
            <PublicationPageShimmer
                profileList={showLikes}
                publicationList={showQuotes}
            />
        );
    }

    if (!data?.post) {
        return <Custom404/>;
    }

    if (error) {
        return <Custom500/>;
    }

    const publication = data.post as Post;
    const targetPublication = publication;
    const suspended = isSuspended || isCommentSuspended;

    return (
        <GridLayout>
            <MetaTags
                creator={getProfile(targetPublication.by).displayName}
                description={getPublicationData(targetPublication.metadata)?.content}
                title={`${targetPublication.__typename} by ${
                    getProfile(targetPublication.by).slugWithPrefix
                } • ${APP_NAME}`}
            />
            <GridItemEight className="space-y-5">

                <Card>
                    <FullPublication
                        key={publication?.id}
                        publication={publication}
                    />
                </Card>
                {suspended ? <CommentSuspendedWarning/> : null}
            </GridItemEight>
            <GridItemFour className="space-y-5">
                <Card as="aside" className="p-5">
                    <UserProfile
                        hideFollowButton={currentProfile?.id === targetPublication.by.id}
                        hideUnfollowButton={currentProfile?.id === targetPublication.by.id}
                        profile={targetPublication.by}
                        showBio
                        source={ProfileLinkSource.Publication}
                    />
                </Card>

                <Footer/>
            </GridItemFour>
        </GridLayout>
    );
};

export default ViewPublication;
