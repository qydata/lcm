import {EnvelopeIcon, HomeIcon} from "@heroicons/react/24/outline";
import {EnvelopeIcon as EnvelopeIconSolid, HomeIcon as HomeIconSolid} from "@heroicons/react/24/solid";
import getAvatar from "@hey/helpers/getAvatar";

import getProfile from "@hey/helpers/getProfile";
import {Image} from "@hey/ui";
import cn from "@hey/ui/cn";
import Link from "next/link";
import {useRouter} from "next/router";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useAccount} from "wagmi";

const BottomNavigation = () => {
    const {currentProfile} = useProfileStore();
    const router = useRouter();

    const isActivePath = (path: string) => router.pathname === path;
    const {address} = useAccount();
    return (
        <div
            className="fixed inset-x-0 bottom-0 z-[5] border-gray-200 border-t bg-white pb-safe md:hidden dark:border-gray-800 dark:bg-black">
            <div
                className={cn("grid", currentProfile ? "grid-cols-3" : "grid-cols-2")}
            >
                <Link aria-label="Home" className="mx-auto my-3" href="/">
                    {isActivePath("/") ? (
                        <HomeIconSolid className="size-8"/>
                    ) : (
                        <HomeIcon className="size-8"/>
                    )}
                </Link>
                <Link
                    aria-label="Notifications"
                    className="mx-auto my-3"
                    href="/messages"
                >
                    {isActivePath("/messages") ? (
                        <EnvelopeIconSolid className="size-8"/>
                    ) : (
                        <EnvelopeIcon className="size-8"/>
                    )}
                </Link>
                {currentProfile && (
                    <Link
                        aria-label="Your profile"
                        className="mx-auto my-3"
                        href={getProfile(currentProfile).link}
                    >
                        <Image
                            alt={currentProfile.id}
                            className="size-8 rounded-full border dark:border-gray-700"
                            onError={({currentTarget}) => {
                                currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
                            }}
                            src={getAvatar(currentProfile)}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default BottomNavigation;
