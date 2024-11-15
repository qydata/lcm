import type {Dispatch, FC, SetStateAction} from "react";
import {PencilSquareIcon} from "@heroicons/react/24/outline";
import {PROFILE} from "@hey/data/tracking";
import {TabButton} from "@hey/ui";
import {ProfileFeedType} from "src/enums";

import MediaFilter from "./Filters/MediaFilter";

interface FeedTypeProps {
  feedType: ProfileFeedType;
  setFeedType?: Dispatch<SetStateAction<ProfileFeedType>>;
}

const FeedType: FC<FeedTypeProps> = ({ feedType, setFeedType }) => {

  const switchTab = (type: ProfileFeedType) => {
    if (setFeedType) {
      setFeedType(type);
    }
    console.log(PROFILE.SWITCH_PROFILE_FEED_TAB, {
      profile_feed_type: type.toLowerCase()
    });
  };

  const tabs = [
    {
      icon: <PencilSquareIcon className="size-4" />,
      name: "只属于你",
      type: ProfileFeedType.Media
    },

  ].filter(
    (tab): tab is { icon: JSX.Element; name: string; type: ProfileFeedType } =>
      Boolean(tab)
  );

  return (
    <div className="flex items-center justify-between">
      <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 sm:mt-0 sm:px-0 md:pb-0">
        {tabs.map((tab) => (
          <TabButton
            active={feedType === tab.type}
            icon={tab.icon}
            key={tab.type}
            name={tab.name}
            onClick={() => switchTab(tab.type)}
            type={tab.type.toLowerCase()}
          />
        ))}
      </div>
      {feedType === ProfileFeedType.Media && <MediaFilter />}
    </div>
  );
};

export default FeedType;
