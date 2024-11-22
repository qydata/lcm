import isVerified from "@helpers/isVerified";
import {CheckBadgeIcon, ExclamationCircleIcon} from "@heroicons/react/24/solid";
import getAvatar from "@lcm/helpers/getAvatar";
import type {Profile} from "@lcm/lens";
import {useProfileLazyQuery} from "@lcm/lens";
import type {FC, ReactNode} from "react";
import {useState} from "react";

import getMentions from "@lcm/helpers/getMentions";
import getProfile from "@lcm/helpers/getProfile";
import hasMisused from "@lcm/helpers/hasMisused";
import truncateByWords from "@lcm/helpers/truncateByWords";
import {Card, Image} from "@lcm/ui";
import * as HoverCard from "@radix-ui/react-hover-card";

import {useAccount} from "wagmi";
import Markup from "./Markup";
import Slug from "./Slug";

const MINIMUM_LOADING_ANIMATION_MS = 800;

interface UserPreviewProps {
    children: ReactNode;
    handle?: string;
    id?: string;
    showUserPreview?: boolean;
}

const UserPreview: FC<UserPreviewProps> = ({
                                               children,
                                               handle,
                                               id,
                                               showUserPreview = true
                                           }) => {
    const [loadProfile, {data, loading: networkLoading}] = useProfileLazyQuery({
        fetchPolicy: "no-cache", // 强制从网络获取数据
        returnPartialData: true
    });
    const [syntheticLoading, setSyntheticLoading] =
        useState<boolean>(networkLoading);
    const profile = data?.profiles[0] as Profile;
    const {address} = useAccount();
    const onPreviewStart = async () => {
        if (profile || networkLoading) {
            return;
        }

        setSyntheticLoading(true);
        await loadProfile({
            variables: {fullHandle: handle}
        });
        setTimeout(() => setSyntheticLoading(false), MINIMUM_LOADING_ANIMATION_MS);
    };

    if (!id && !handle) {
        return null;
    }

    if (!showUserPreview) {
        return <span>{children}</span>;
    }

    const Preview = () => {
        if (networkLoading || syntheticLoading) {
            return (
                <div className="flex flex-col">
                    <div className="horizontal-loader w-full">
                        <div/>
                    </div>
                    <div className="flex p-3">
                        <div>{handle || `#${id}`}</div>
                    </div>
                </div>
            );
        }

        if (!profile) {
            return (
                <div className="flex h-12 items-center px-3">No profile found</div>
            );
        }

        const UserAvatar: FC = () => (
            <Image
                alt={profile?.id}
                className="size-12 rounded-full border bg-gray-200 dark:border-gray-700"
                height={48}
                loading="lazy"
                onError={({currentTarget}) => {
                    currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
                }}
                src={getAvatar(profile)}
                width={48}
            />
        );

        const UserName: FC = () => (
            <>
                <div className="flex max-w-sm items-center gap-1 truncate">
                    <div className="text-md">{getProfile(profile).displayName}</div>
                    {isVerified(profile?.id) && (
                        <CheckBadgeIcon className="size-4 text-brand-500"/>
                    )}
                    {hasMisused(profile?.id) && (
                        <ExclamationCircleIcon className="size-4 text-red-500"/>
                    )}
                </div>
                <span>
          <Slug className="text-sm" slug={getProfile(profile).slugWithPrefix}/>
                    {profile.operations.isFollowingMe.value && (
                        <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-gray-700">
              Follows you
            </span>
                    )}
        </span>
            </>
        );

        return (
            <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                    <UserAvatar/>
                </div>
                <UserName/>
                {profile.metadata?.bio && (
                    <div className="linkify mt-2 break-words text-sm leading-6">
                        <Markup mentions={getMentions(profile.metadata.bio)}>
                            {truncateByWords(profile.metadata.bio, 20)}
                        </Markup>
                    </div>
                )}
            </div>
        );
    };

    return (
        <span onFocus={onPreviewStart} onMouseOver={onPreviewStart}>
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <span>{children}</span>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
              asChild
              className="z-10 w-72"
              side="bottom"
              sideOffset={5}
          >
            <div>
              <Card forceRounded>
                <Preview/>
              </Card>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </span>
    );
};

export default UserPreview;
