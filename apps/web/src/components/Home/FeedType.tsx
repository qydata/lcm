import type { Dispatch, FC, SetStateAction } from "react";

import New from "@components/Shared/Badges/New";

import { HomeFeedType } from "@hey/data/enums";
import { HOME } from "@hey/data/tracking";
import { TabButton } from "@hey/ui";

interface FeedTypeProps {
  feedType: HomeFeedType;
  setFeedType: Dispatch<SetStateAction<HomeFeedType>>;
}

const FeedType: FC<FeedTypeProps> = ({ feedType, setFeedType }) => {
  const tabs = [
    {
      badge: <New />,
      name: "只属于你",
      track: HOME.SWITCH_FORYOU_FEED,
      type: HomeFeedType.FORYOU
    }
  ].filter(
    (
      tab
    ): tab is {
      badge?: JSX.Element;
      name: string;
      track: string;
      type: HomeFeedType;
    } => Boolean(tab)
  );

  return (
    <div className="flex gap-3 overflow-x-auto px-5 sm:px-0">
      {tabs.map((tab) => (
        <TabButton
          active={feedType === tab.type}
          badge={tab.badge}
          key={tab.type}
          name={tab.name}
          onClick={() => {
            setFeedType(tab.type);
            console.log(tab.track);
          }}
          showOnSm
        />
      ))}
    </div>
  );
};

export default FeedType;
