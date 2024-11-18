import SinglePublication from "@components/Publication/SinglePublication";
import PublicationsShimmer from "@components/Shared/Shimmer/PublicationsShimmer";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { usePublicationsQuery } from "@lcm/lens";
import { Card, EmptyState, ErrorMessage } from "@lcm/ui";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import type { StateSnapshot, VirtuosoHandle } from "react-virtuoso";
import { Virtuoso } from "react-virtuoso";
import type { ProfileFeedType } from "src/enums";
import { useImpressionsStore } from "src/store/non-persisted/useImpressionsStore";
import { useProfileFeedStore } from "src/store/non-persisted/useProfileFeedStore";
import { useTipsStore } from "src/store/non-persisted/useTipsStore";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useTransactionStore } from "src/store/persisted/useTransactionStore";

let virtuosoState: any = { ranges: [], screenTop: 0 };

interface FeedProps {
  handle: string;
  profileDetailsLoading: boolean;
  profileId: string;
  type: ProfileFeedType.Media;
}

const Feed: FC<FeedProps> = ({
  handle,
  profileDetailsLoading,
  profileId,
  type
}) => {
  const { currentProfile } = useProfileStore();
  const { mediaFeedFilters } = useProfileFeedStore();
  const { fetchAndStoreViews } = useImpressionsStore();
  const { fetchAndStoreTips } = useTipsStore();
  const { indexedPostHash } = useTransactionStore();
  const virtuoso = useRef<VirtuosoHandle>(null);

  useEffect(() => {
    virtuosoState = { ranges: [], screenTop: 0 };
  }, [profileId, handle]);

  const getMediaFilters = () => {
    const filters = [];
    if (mediaFeedFilters.images) {
      filters.push("IMAGE");
    }
    if (mediaFeedFilters.video) {
      filters.push("VIDEO");
    }
    if (mediaFeedFilters.audio) {
      filters.push("AUDIO");
    }
    if (mediaFeedFilters.text_only) {
      filters.push("TEXT_ONLY");
    }
    if (mediaFeedFilters.article) {
      filters.push("ARTICLE");
    }
    return filters;
  };

  const request = {
    first: 25,
    mainContentFocus: getMediaFilters(),
    ...{ from: profileId }
  };

  // if (profileId) {
  const { data, error, fetchMore, loading, refetch } = usePublicationsQuery({
    variables: request
  });
  const publications = data?.posts;
  const pageInfo = data?.posts?.pageInfo;
  const hasMore = publications?.length == 25;

  useEffect(() => {
    if (indexedPostHash && currentProfile?.id === profileId) {
      refetch();
    }
  }, [indexedPostHash]);

  const onScrolling = (scrolling: boolean) => {
    if (!scrolling) {
      virtuoso?.current?.getState((state: StateSnapshot) => {
        virtuosoState = { ...state };
      });
    }
  };

  const onEndReached = async () => {
    if (hasMore) {
      const { data } = await fetchMore({
        variables: { request: { ...request, skip: 25 } }
      });
    }
  };

  if (loading || profileDetailsLoading) {
    return <PublicationsShimmer />;
  }

  if (publications?.length === 0) {
    const emptyMessage = "";

    return (
      <EmptyState
        icon={<ChatBubbleBottomCenterIcon className="size-8" />}
        message={
          <div>
            <b className="mr-1">{handle}</b>
            <span>{emptyMessage}</span>
          </div>
        }
      />
    );
  }

  if (error) {
    return <ErrorMessage error={error} title="Failed to load profile feed" />;
  }

  return (
    <Card>
      <Virtuoso
        className="virtual-divider-list-window"
        computeItemKey={(index, publication) => `${publication.id}-${index}`}
        data={publications}
        endReached={onEndReached}
        isScrolling={onScrolling}
        itemContent={(index, publication) => (
          <SinglePublication
            isFirst={index === 0}
            isLast={index === (publications?.length || 0) - 1}
            publication={publication as Post}
          />
        )}
        ref={virtuoso}
        restoreStateFrom={
          virtuosoState.ranges.length === 0
            ? virtuosoState?.current?.getState((state: StateSnapshot) => state)
            : virtuosoState
        }
        useWindowScroll
      />
    </Card>
  );
};

export default Feed;
