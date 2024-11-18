import type { Profile } from "@lcm/lens";
import type { FC } from "react";
import { memo } from "react";

import isVerified from "@helpers/isVerified";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/solid";
import formatRelativeOrAbsolute from "@lcm/helpers/datetime/formatRelativeOrAbsolute";
import getAvatar from "@lcm/helpers/getAvatar";

import getProfile from "@lcm/helpers/getProfile";
import hasMisused from "@lcm/helpers/hasMisused";
import { Image } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import Link from "next/link";

import { useAccount } from "wagmi";
import Slug from "./Slug";

interface UserProfileProps {
  hideSlug?: boolean;
  linkToProfile?: boolean;
  profile: Profile;
  smallAvatar?: boolean;
  timestamp?: Date;
}

const SmallUserProfile: FC<UserProfileProps> = ({
  hideSlug = false,
  linkToProfile = false,
  profile,
  smallAvatar = false,
  timestamp = ""
}) => {
  const { address } = useAccount();
  const UserAvatar: FC = () => (
    <Image
      alt={profile?.id}
      className={cn(
        smallAvatar ? "size-4" : "size-6",
        "rounded-full border bg-gray-200 dark:border-gray-700"
      )}
      height={smallAvatar ? 16 : 24}
      loading="lazy"
      onError={({ currentTarget }) => {
        currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
      }}
      src={getAvatar(profile)}
      width={smallAvatar ? 16 : 24}
    />
  );

  const UserName: FC = () => (
    <div className="flex max-w-full flex-wrap items-center">
      <div className={cn(!hideSlug && "max-w-[75%]", "mr-1 truncate")}>
        {getProfile(profile).displayName}
      </div>
      {isVerified(profile?.id) && (
        <CheckBadgeIcon className="mr-1 size-4 text-brand-500" />
      )}
      {hasMisused(profile?.id) && (
        <ExclamationCircleIcon className="mr-2 size-4 text-red-500" />
      )}
      {!hideSlug && (
        <Slug className="text-sm" slug={getProfile(profile).slugWithPrefix} />
      )}
      {timestamp && (
        <span className="ld-text-gray-500">
          <span className="mx-1.5">·</span>
          <span className="text-xs">{formatRelativeOrAbsolute(timestamp)}</span>
        </span>
      )}
    </div>
  );

  const UserInfo: FC = () => (
    <div className="flex items-center space-x-2">
      <UserAvatar />
      <UserName />
    </div>
  );

  return linkToProfile ? (
    <Link href={getProfile(profile).link}>
      <UserInfo />
    </Link>
  ) : (
    <UserInfo />
  );
};

export default memo(SmallUserProfile);
