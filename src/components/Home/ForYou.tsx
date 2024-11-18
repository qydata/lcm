import type { PublicationForYouRequest } from "@lcm/lens";
import { useForYouQuery } from "@lcm/lens";
import type { FC } from "react";

import QueuedPublication from "@components/Publication/QueuedPublication";
import SinglePublication from "@components/Publication/SinglePublication";
import PublicationsShimmer from "@components/Shared/Shimmer/PublicationsShimmer";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { OptmisticPublicationType } from "@lcm/types/enums";
import { Card, EmptyState, ErrorMessage } from "@lcm/ui";
import { Virtuoso } from "react-virtuoso";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useTransactionStore } from "src/store/persisted/useTransactionStore";

const ForYou: FC = () => {
  const { currentProfile } = useProfileStore();
  const { txnQueue } = useTransactionStore();

  const request: PublicationForYouRequest = {
    from: currentProfile?.id,
    limit: 25
  };

  const { data, error, fetchMore, loading } = useForYouQuery({
    onCompleted: ({ posts }) => {
      const ids = posts?.map((p) => p.id) || [];
    },
    variables: request
  });

  const publications = data?.posts;
  const pageInfo = data?.posts?.pageInfo;
  const hasMore = pageInfo?.next;

  const onEndReached = async () => {
    if (hasMore) {
      const { data } = await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      });
      const ids = data?.posts?.map((p) => p.publication.id) || [];
    }
  };

  if (loading) {
    return <PublicationsShimmer />;
  }

  if (publications?.length === 0) {
    return (
      <EmptyState
        icon={<LightBulbIcon className="size-8" />}
        message="还没有帖子！"
      />
    );
  }

  if (error) {
    return <ErrorMessage error={error} title="Failed to load highlights" />;
  }

  return (
    <>
      {txnQueue.map((txn) =>
        txn?.type === OptmisticPublicationType.Post ? (
          <QueuedPublication key={txn.txId} txn={txn} />
        ) : null
      )}
      <Card>
        <Virtuoso
          className="virtual-divider-list-window"
          computeItemKey={(index, item) => `${item.id}-${index}`}
          data={publications}
          endReached={onEndReached}
          itemContent={(index, item) => (
            <SinglePublication
              isFirst={index === 0}
              isLast={index === (publications?.length || 0) - 1}
              publication={item as Post}
            />
          )}
          useWindowScroll
        />
      </Card>
    </>
  );
};

export default ForYou;
