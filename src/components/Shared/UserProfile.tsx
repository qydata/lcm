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

import getMentions from "@lcm/helpers/getMentions";
import getProfile from "@lcm/helpers/getProfile";
import hasMisused from "@lcm/helpers/hasMisused";
import humanize from "@lcm/helpers/humanize";
import { Image } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import Link from "next/link";

import { useAccount } from "wagmi";
import Markup from "./Markup";
import Slug from "./Slug";
import UserPreview from "./UserPreview";

interface UserProfileProps {
  hideFollowButton?: boolean;
  hideUnfollowButton?: boolean;
  isBig?: boolean;
  linkToProfile?: boolean;
  profile: Profile;
  showBio?: boolean;
  showId?: boolean;
  showUserPreview?: boolean;
  source?: string;
  timestamp?: Date;
}

const UserProfile: FC<UserProfileProps> = ({
  hideFollowButton = false,
  hideUnfollowButton = false,
  isBig = false,
  linkToProfile = true,
  profile,
  showBio = false,
  showId = false,
  showUserPreview = true,
  source,
  timestamp
}) => {
  const { address } = useAccount();
  const UserAvatar: FC = () => (
    <Image
      alt={profile?.id}
      className={cn(
        isBig ? "size-14" : "size-11",
        "rounded-full border bg-gray-200 dark:border-gray-700"
      )}
      height={isBig ? 56 : 44}
      loading="lazy"
      onError={({ currentTarget }) => {
        currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
      }}
      src={getAvatar(profile)}
      width={isBig ? 56 : 44}
    />
  );

  const UserName: FC = () => (
    <>
      <div className="flex max-w-sm items-center">
        <div className={cn(isBig ? "font-bold" : "text-md", "grid")}>
          <div className="truncate font-semibold">
            {getProfile(profile).displayName}
          </div>
        </div>
        {isVerified(profile?.id) && (
          <CheckBadgeIcon className="ml-1 size-4 text-brand-500" />
        )}
        {hasMisused(profile?.id) && (
          <ExclamationCircleIcon className="ml-1 size-4 text-red-500" />
        )}
      </div>
      <div>
        <Slug className="text-sm" slug={getProfile(profile).slugWithPrefix} />
        {timestamp && (
          <span className="ld-text-gray-500">
            <span className="mx-1.5">·</span>
            <span className="text-xs">
              {formatRelativeOrAbsolute(timestamp)}
            </span>
          </span>
        )}
        {showId && (
          <span className="ld-text-gray-500">
            <span className="mx-1.5">·</span>
            <span className="text-xs">
              {humanize(Number.parseInt(profile?.id))}
            </span>
          </span>
        )}
      </div>
    </>
  );

  const UserInfo: FC = () => (
    <UserPreview
      handle={profile.handle?.fullHandle}
      id={profile?.id}
      showUserPreview={showUserPreview}
    >
      <div className="mr-8 flex items-center space-x-3">
        <UserAvatar />
        <div>
          <UserName />
          {showBio && profile?.metadata?.bio && (
            <div
              className={cn(
                isBig ? "text-base" : "text-sm",
                "mt-2",
                "linkify leading-6"
              )}
              style={{ wordBreak: "break-word" }}
            >
              <Markup mentions={getMentions(profile.metadata.bio)}>
                {profile?.metadata.bio}
              </Markup>
            </div>
          )}
        </div>
      </div>
    </UserPreview>
  );

  return (
    <div className="flex items-center justify-between">
      {linkToProfile && profile?.id ? (
        <Link
          as={getProfile(profile).link}
          href={getProfile(profile, source).sourceLink}
        >
          <UserInfo />
        </Link>
      ) : (
        <UserInfo />
      )}
    </div>
  );
};

export default memo(UserProfile);
