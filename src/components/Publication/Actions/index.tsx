import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import type { FC } from "react";
import { memo } from "react";
import Like from "./Like";

interface PublicationActionsProps {
  publication: Post;
  showCount?: boolean;
}

const PublicationActions: FC<PublicationActionsProps> = ({
  publication,
  showCount = false
}) => {
  const targetPublication = publication;

  return (
    <span
      className="mt-3 flex w-full flex-wrap items-center justify-between gap-3"
      onClick={stopEventPropagation}
    >
      <span className="flex items-center gap-x-6">
        {/*<Comment publication={targetPublication} showCount={showCount} />*/}
        {/*<ShareMenu publication={publication} showCount={showCount} />*/}
        <Like publication={targetPublication} showCount={showCount} />
      </span>
    </span>
  );
};

export default memo(PublicationActions);
