import type { FC } from "react";
import { memo } from "react";

import Attachments from "@components/Shared/Attachments";
import Markup from "@components/Shared/Markup";
import Oembed from "@components/Shared/Oembed";
import { EyeIcon } from "@heroicons/react/24/outline";
import { KNOWN_ATTRIBUTES } from "@lcm/data/constants";
import getPublicationAttribute from "@lcm/helpers/getPublicationAttribute";
import getPublicationData from "@lcm/helpers/getPublicationData";
import getURLs from "@lcm/helpers/getURLs";
import isPublicationMetadataTypeAllowed from "@lcm/helpers/isPublicationMetadataTypeAllowed";
import { H6 } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import Link from "next/link";
import { isIOS, isMobile } from "react-device-detect";

import { isEncryptedPublicationMetadata } from "@components/encCommon";
import EncryptedPublication from "./EncryptedPublication";
import Metadata from "./Metadata";
import NotSupportedPublication from "./NotSupportedPublication";

interface PublicationBodyProps {
  contentClassName?: string;
  publication: Post;
  quoted?: boolean;
  showMore?: boolean;
}

const PublicationBody: FC<PublicationBodyProps> = ({
  contentClassName = "",
  publication,
  quoted = false,
  showMore = false
}) => {
  const targetPublication = publication;
  const { id, metadata } = targetPublication;
  if (metadata === null) {
    return <></>;
  }
  const filteredContent = getPublicationData(metadata)?.content || "";
  const filteredAttachments = getPublicationData(metadata)?.attachments || [];
  const filteredAsset = getPublicationData(metadata)?.asset;

  const canShowMore = filteredContent?.length > 450 && showMore;
  const urls = getURLs(filteredContent);
  const hasURLs = urls.length > 0;

  let content = filteredContent;

  if (isIOS && isMobile && canShowMore) {
    const truncatedContent = content?.split("\n")?.[0];
    if (truncatedContent) {
      content = truncatedContent;
    }
  }

  // if (targetPublication.isEncrypted) {
  // if (metadata?.encryptedWith != null) {
  if (isEncryptedPublicationMetadata(metadata)) {
    return (
      <EncryptedPublication
        metadata={metadata}
        publication={targetPublication}
      />
    );
  }

  if (!isPublicationMetadataTypeAllowed(metadata.mainContentFocus)) {
    return <NotSupportedPublication type={metadata.mainContentFocus} />;
  }

  // Show attachments if it's there
  const showAttachments = filteredAttachments.length > 0 || filteredAsset;

  // Show sharing link
  const showSharingLink = metadata.__typename === "LinkMetadataV3";
  // Show quote
  const showQuote = targetPublication.__typename === "Quote";
  // Show oembed if no NFT, no attachments, no quoted publication
  const hideOembed =
    getPublicationAttribute(
      metadata.attributes,
      KNOWN_ATTRIBUTES.HIDE_OEMBED
    ) === "true";

  const showOembed =
    !hideOembed &&
    !showSharingLink &&
    hasURLs &&
    !showLive &&
    !showAttachments &&
    !quoted &&
    !showQuote;

  return (
    <div className="break-words">
      <Markup
        className={cn(
          { "line-clamp-5": canShowMore },
          "markup linkify break-words text-md",
          contentClassName
        )}
        mentions={targetPublication.profilesMentioned}
      >
        {content}
      </Markup>
      {canShowMore ? (
        <H6 className="ld-text-gray-500 mt-4 flex items-center space-x-1">
          <EyeIcon className="size-4" />
          <Link href={`/posts/${id}`}>Show more</Link>
        </H6>
      ) : null}
      {/* Attachments and Quotes */}
      {showAttachments ? (
        <Attachments asset={filteredAsset} attachments={filteredAttachments} />
      ) : null}

      {showOembed ? (
        <Oembed publication={targetPublication} url={urls[0]} />
      ) : null}
      {showSharingLink ? (
        <Oembed publication={targetPublication} url={metadata.sharingLink} />
      ) : null}
      <Metadata metadata={targetPublication.metadata} />
    </div>
  );
};

export default memo(PublicationBody);
