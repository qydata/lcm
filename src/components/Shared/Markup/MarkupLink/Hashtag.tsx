import type {MarkupLinkProps} from "@lcm/types/misc";
import type {FC} from "react";

import {STATIC_IMAGES_URL} from "@lcm/data/constants";
import {hashflags} from "@lcm/data/hashflags";
import {prideHashtags} from "@lcm/data/pride-hashtags";
import {PUBLICATION} from "@lcm/data/tracking";
import isPrideMonth from "@lcm/helpers/isPrideMonth";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import Link from "next/link";
import urlcat from "urlcat";

const Hashtag: FC<MarkupLinkProps> = ({ title }) => {
  if (!title) {
    return null;
  }

  const tag = title.slice(1).toLowerCase();
  const hasHashflag = Object.prototype.hasOwnProperty.call(hashflags, tag);
  const isPrideHashtag = isPrideMonth() ? prideHashtags.includes(tag) : false;

  return (
    <span className="inline-flex items-center space-x-1">
      <span>
        <Link
          className="outline-none focus:underline"
          href={urlcat("/search", {
            q: title,
            src: "link_click",
            type: "pubs"
          })}
          onClick={(event) => {
            stopEventPropagation(event);
            console.log(PUBLICATION.CLICK_HASHTAG, { hashtag: tag });
          }}
        >
          {isPrideHashtag ? <span className="pride-text">{title}</span> : title}
        </Link>
      </span>
      {hasHashflag ? (
        <img
          alt={tag}
          className="!mr-0.5 h-4"
          height={16}
          src={`${STATIC_IMAGES_URL}/hashflags/${hashflags[tag]}.png`}
        />
      ) : null}
    </span>
  );
};

export default Hashtag;
