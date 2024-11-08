import type {Publication, PublicationSearchRequest} from "@hey/lens";
import {CustomFiltersType, useSearchPublicationsQuery} from "@hey/lens";
import type {FC} from "react";
import {useRef} from "react";
import type {StateSnapshot, VirtuosoHandle} from "react-virtuoso";
import {Virtuoso} from "react-virtuoso";

import SinglePublication from "@components/Publication/SinglePublication";
import PublicationsShimmer from "@components/Shared/Shimmer/PublicationsShimmer";
import {ChatBubbleBottomCenterIcon} from "@heroicons/react/24/outline";
import {Card, EmptyState, ErrorMessage} from "@hey/ui";

let virtuosoState: any = { ranges: [], screenTop: 0 };

interface PublicationsProps {
  query: string;
}

const Publications: FC<PublicationsProps> = ({ query }) => {

  const virtuoso = useRef<VirtuosoHandle>(null);

  const request: PublicationSearchRequest = {
    limit: 25,
    query,
    where: { customFilters: [CustomFiltersType.Gardeners] }
  };

  const { data, error, fetchMore, loading } = useSearchPublicationsQuery({
    onCompleted: async ({ searchPublications }) => {
      const ids = searchPublications?.items?.map((p) => p.id) || [];


    },
    variables: { request }
  });

  const search = data?.searchPublications;
  const publications = search?.items as Post[];
  const pageInfo = search?.pageInfo;
  const hasMore = pageInfo?.next;

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
        variables: { request: { ...request, cursor: pageInfo?.next } }
      });
      const ids = data?.searchPublications?.items?.map((p) => p.id) || [];


    }
  };

  if (loading) {
    return <PublicationsShimmer />;
  }

  if (publications?.length === 0) {
    return (
      <EmptyState
        icon={<ChatBubbleBottomCenterIcon className="size-8" />}
        message={
          <span>
            No publications for <b>&ldquo;{query}&rdquo;</b>
          </span>
        }
      />
    );
  }

  if (error) {
    return <ErrorMessage error={error} title="Failed to load publications" />;
  }

  return (
    <Card>
      <Virtuoso
        className="virtual-divider-list-window"
        computeItemKey={(index, publication) => `${publication?.id}-${index}`}
        data={publications}
        endReached={onEndReached}
        isScrolling={onScrolling}
        itemContent={(index, publication) => (
          <SinglePublication
            isFirst={index === 0}
            isLast={index === (publications?.length || 0) - 1}
            publication={publication}
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

export default Publications;
