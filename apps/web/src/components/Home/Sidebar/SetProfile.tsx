import type { FC } from "react";


import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { APP_NAME } from "@hey/data/constants";
import { ONBOARDING } from "@hey/data/tracking";
import { Card, H5 } from "@hey/ui";
import Link from "next/link";
import { useProfileStore } from "src/store/persisted/useProfileStore";

interface StatusProps {
  finished: boolean;
  title: string;
}

const Status: FC<StatusProps> = ({ finished, title }) => (
  <div className="flex items-center space-x-1.5">
    {finished ? (
      <CheckCircleIcon className="size-5" />
    ) : (
      <MinusCircleIcon className="size-5" />
    )}
    <div className="ld-text-gray-500">{title}</div>
  </div>
);

const SetProfile: FC = () => {
  const { currentProfile } = useProfileStore();

  const doneSetup =
    Boolean(currentProfile?.metadata?.displayName) &&
    Boolean(currentProfile?.metadata?.bio) &&
    Boolean(currentProfile?.metadata?.picture);

  if (doneSetup) {
    return null;
  }

  return (
    <Card as="aside" className="mb-4 space-y-4 p-5">
      <H5>设置 {APP_NAME} 个人资料</H5>
      <div className="space-y-1 text-sm leading-5">
        <Status
          finished={Boolean(currentProfile?.metadata?.displayName)}
          title="设置个人名称"
        />
        <Status
          finished={Boolean(currentProfile?.metadata?.bio)}
          title="设置个人介绍"
        />
        <Status
          finished={Boolean(currentProfile?.metadata?.picture)}
          title="设置个人头像"
        />
      </div>
      <div className="font-bold">
        <Link
          href="/settings"
          onClick={() => console.log(ONBOARDING.NAVIGATE_UPDATE_PROFILE)}
        >
          立即更新个人资料
        </Link>
      </div>
    </Card>
  );
};

export default SetProfile;
