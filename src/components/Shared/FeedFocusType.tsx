import type { Dispatch, FC, SetStateAction } from "react";

import { EXPLORE } from "@lcm/data/tracking";
import { PublicationMetadataMainFocusType } from "@lcm/lens";
import cn from "@lcm/ui/cn";

interface FeedLinkProps {
  focus?: PublicationMetadataMainFocusType;
  name: string;
  setFocus: Dispatch<
    SetStateAction<PublicationMetadataMainFocusType | undefined>
  >;
  type?: PublicationMetadataMainFocusType;
}

const FeedLink: FC<FeedLinkProps> = ({ focus, name, setFocus, type }) => (
  <button
    aria-label={name}
    className={cn(
      focus === type ? "bg-black text-white" : "bg-gray-100 dark:bg-gray-800",
      "rounded-full px-3 py-1.5 text-xs sm:px-4",
      "border border-gray-300 dark:border-gray-500"
    )}
    onClick={() => {
      setFocus(type);
      console.log(EXPLORE.SWITCH_EXPLORE_FEED_FOCUS, {
        explore_feed_focus: (type || "all_posts").toLowerCase()
      });
    }}
    type="button"
  >
    {name}
  </button>
);

interface FeedFocusTypeProps {
  focus?: PublicationMetadataMainFocusType;
  setFocus: Dispatch<
    SetStateAction<PublicationMetadataMainFocusType | undefined>
  >;
}

const FeedFocusType: FC<FeedFocusTypeProps> = ({ focus, setFocus }) => (
  <div className="mx-5 my-5 flex flex-wrap gap-3 sm:mx-0">
    <FeedLink focus={focus} name="All posts" setFocus={setFocus} />
    <FeedLink
      focus={focus}
      name="Text"
      setFocus={setFocus}
      type={PublicationMetadataMainFocusType.TextOnly}
    />
    <FeedLink
      focus={focus}
      name="Video"
      setFocus={setFocus}
      type={PublicationMetadataMainFocusType.Video}
    />
    <FeedLink
      focus={focus}
      name="Audio"
      setFocus={setFocus}
      type={PublicationMetadataMainFocusType.Audio}
    />
    <FeedLink
      focus={focus}
      name="Images"
      setFocus={setFocus}
      type={PublicationMetadataMainFocusType.Image}
    />
  </div>
);

export default FeedFocusType;
