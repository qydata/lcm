import type { Profile } from "@lcm/lens";
import type { FC, ReactNode } from "react";
import { useState } from "react";

import Markup from "@components/Shared/Markup";
import Slug from "@components/Shared/Slug";
import isVerified from "@helpers/isVerified";
import {
  ClockIcon,
  Cog6ToothIcon,
  HashtagIcon,
  MapPinIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  EyeSlashIcon
} from "@heroicons/react/24/solid";
import { EXPANDED_AVATAR, STATIC_IMAGES_URL } from "@lcm/data/constants";
import formatDate from "@lcm/helpers/datetime/formatDate";
import getAvatar from "@lcm/helpers/getAvatar";
import getFavicon from "@lcm/helpers/getFavicon";

import getMentions from "@lcm/helpers/getMentions";
import getMisuseDetails from "@lcm/helpers/getMisuseDetails";
import getProfile from "@lcm/helpers/getProfile";
import getProfileAttribute from "@lcm/helpers/getProfileAttribute";
import hasMisused from "@lcm/helpers/hasMisused";
import { Button, H3, Image, LightBox, Tooltip } from "@lcm/ui";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import urlcat from "urlcat";

import { useAccount } from "wagmi";
import Badges from "./Badges";
import Pro from "./Badges/Pro";
import ProfileMenu from "./Menu";
import ScamWarning from "./ScamWarning";

export const MetaDetails = ({
  children,
  icon
}: {
  children: ReactNode;
  icon: ReactNode;
}) => (
  <div className="flex items-center gap-2">
    {icon}
    <div className="truncate text-md">{children}</div>
  </div>
);

interface DetailsProps {
  isSuspended: boolean;
  profile: Profile;
}

const Details: FC<DetailsProps> = ({ isSuspended = false, profile }) => {
  const { push } = useRouter();
  const { currentProfile } = useProfileStore();
  const [expandedImage, setExpandedImage] = useState<null | string>(null);
  const isStaff = false;
  const { resolvedTheme } = useTheme();
  const { address } = useAccount();
  const misuseDetails = getMisuseDetails(profile?.id);

  return (
    <div className="mb-4 space-y-5 px-5 sm:px-0">
      <div className="-mt-24 sm:-mt-32 relative size-32 sm:size-52">
        <Image
          alt={profile?.id}
          className="size-32 cursor-pointer rounded-full bg-gray-200 ring-8 ring-gray-50 sm:size-52 dark:bg-gray-700 dark:ring-black"
          height={128}
          onClick={() => setExpandedImage(getAvatar(profile, EXPANDED_AVATAR))}
          onError={({ currentTarget }) => {
            currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
          }}
          src={getAvatar(profile)}
          width={128}
        />
        <LightBox
          onClose={() => setExpandedImage(null)}
          show={Boolean(expandedImage)}
          url={expandedImage}
        />
      </div>
      <div className="space-y-1 py-2">
        <div className="flex items-center gap-1.5">
          <H3 className="truncate">{getProfile(profile).displayName}</H3>
          {isVerified(profile?.id) ? (
            <Tooltip content="Verified">
              <CheckBadgeIcon className="size-6 text-brand-500" />
            </Tooltip>
          ) : null}
          {hasMisused(profile?.id) ? (
            <Tooltip content={misuseDetails?.type}>
              <ExclamationCircleIcon className="size-6 text-brand-500" />
            </Tooltip>
          ) : null}
          {isSuspended ? (
            <Tooltip content="Suspended">
              <EyeSlashIcon className="size-6 text-brand-500" />
            </Tooltip>
          ) : null}
          <Pro id={profile?.id} />
        </div>
        <div className="flex items-center space-x-3">
          <Slug
            className="text-sm sm:text-base"
            slug={getProfile(profile).slugWithPrefix}
          />
        </div>
      </div>
      {profile?.metadata?.bio ? (
        <div className="markup linkify mr-0 break-words text-md sm:mr-10">
          <Markup mentions={getMentions(profile?.metadata.bio)}>
            {profile?.metadata.bio}
          </Markup>
        </div>
      ) : null}
      <div className="space-y-5">
        <ScamWarning profileId={profile?.id} />
        <div className="flex items-center space-x-2">
          {currentProfile?.id === profile?.id ? (
            <Button
              icon={<Cog6ToothIcon className="size-5" />}
              onClick={() => push("/settings")}
              outline
            >
              编辑个人信息
            </Button>
          ) : null}
          <ProfileMenu profile={profile} />
        </div>
        <div className="divider w-full" />
        <div className="space-y-2">
          {isStaff ? (
            <MetaDetails
              icon={<ShieldCheckIcon className="size-4 text-yellow-600" />}
            >
              <Link
                className="text-yellow-600"
                href={getProfile(profile).staffLink}
              >
                Open in Staff Tools
              </Link>
            </MetaDetails>
          ) : null}
          <MetaDetails icon={<HashtagIcon className="size-4" />}>
            {Number.parseInt(profile?.id)}
          </MetaDetails>
          {getProfileAttribute("location", profile?.metadata?.attributes) ? (
            <MetaDetails icon={<MapPinIcon className="size-4" />}>
              {getProfileAttribute("location", profile?.metadata?.attributes)}
            </MetaDetails>
          ) : null}
          {getProfileAttribute("website", profile?.metadata?.attributes) ? (
            <MetaDetails
              icon={
                <img
                  alt="Website"
                  className="size-4 rounded-full"
                  height={16}
                  src={getFavicon(
                    getProfileAttribute(
                      "website",
                      profile?.metadata?.attributes
                    )
                  )}
                  width={16}
                />
              }
            >
              <Link
                href={`https://${getProfileAttribute(
                  "website",
                  profile?.metadata?.attributes
                )
                  ?.replace("https://", "")
                  .replace("http://", "")}`}
                rel="noreferrer noopener me"
                target="_blank"
              >
                {getProfileAttribute("website", profile?.metadata?.attributes)
                  ?.replace("https://", "")
                  .replace("http://", "")}
              </Link>
            </MetaDetails>
          ) : null}
          {getProfileAttribute("x", profile?.metadata?.attributes) ? (
            <MetaDetails
              icon={
                <img
                  alt="X Logo"
                  className="size-4"
                  height={16}
                  src={`${STATIC_IMAGES_URL}/brands/${
                    resolvedTheme === "dark" ? "x-dark.png" : "x-light.png"
                  }`}
                  width={16}
                />
              }
            >
              <Link
                href={urlcat("https://x.com/:username", {
                  username: getProfileAttribute(
                    "x",
                    profile?.metadata?.attributes
                  )?.replace("https://x.com/", "")
                })}
                rel="noreferrer noopener"
                target="_blank"
              >
                {getProfileAttribute(
                  "x",
                  profile?.metadata?.attributes
                )?.replace("https://x.com/", "")}
              </Link>
            </MetaDetails>
          ) : null}
          <MetaDetails icon={<ClockIcon className="size-4" />}>
            加入于 {formatDate(profile.createdAt)}
          </MetaDetails>
        </div>
      </div>
      <Badges id={profile?.id} />
    </div>
  );
};

export default Details;
