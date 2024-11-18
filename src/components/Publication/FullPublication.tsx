import formatDate from "@lcm/helpers/datetime/formatDate";
import getAppName from "@lcm/helpers/getAppName";
import { Card } from "@lcm/ui";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import usePushToImpressions from "src/hooks/usePushToImpressions";
import PublicationActions from "./Actions";
import HiddenPublication from "./HiddenPublication";
import PublicationAvatar from "./PublicationAvatar";
import PublicationBody from "./PublicationBody";
import PublicationHeader from "./PublicationHeader";

interface FullPublicationProps {
  publication: Post;
}

const FullPublication: FC<FullPublicationProps> = ({ publication }) => {
  const isStaff = false;

  const targetPublication = publication;

  const { by, createdAt, publishedOn } = targetPublication;

  usePushToImpressions(targetPublication.id);

  const { data: profileDetails } = useQuery({
    enabled: Boolean(by.id),
    queryKey: ["getProfileDetailsOnPublication", by.id]
  });

  const isSuspended = isStaff ? false : profileDetails?.isSuspended;

  if (isSuspended) {
    return (
      <Card className="!bg-gray-100 dark:!bg-gray-800 m-5" forceRounded>
        <div className="px-4 py-3 text-sm">
          Author Profile has been suspended!
        </div>
      </Card>
    );
  }

  return (
    <article className="p-5">
      <div className="flex items-start space-x-3">
        <PublicationAvatar publication={publication} />
        <div className="w-[calc(100%-55px)]">
          <PublicationHeader publication={targetPublication} />
          {targetPublication.isHidden ? (
            <HiddenPublication type={targetPublication.__typename} />
          ) : (
            <>
              <PublicationBody
                contentClassName="full-page-publication-markup"
                publication={targetPublication}
              />
              <div className="ld-text-gray-500 my-3 text-sm">
                <span>{formatDate(createdAt, "YYYY MMM D, · hh:mm A")}</span>
                {publishedOn?.id ? (
                  <span> · Posted via {getAppName(publishedOn.id)}</span>
                ) : null}
              </div>
              <div className="divider" />
              <div className="flex items-center justify-between">
                <PublicationActions publication={targetPublication} showCount />
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default FullPublication;
