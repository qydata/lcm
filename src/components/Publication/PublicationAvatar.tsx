import type { FC } from "react";
import { memo } from "react";

import type { Post } from "@components/Common/gated/graphql";
import getAvatar from "@lcm/helpers/getAvatar";
import getProfile from "@lcm/helpers/getProfile";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { Image } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

interface PublicationAvatarProps {
  publication: Post;
  quoted?: boolean;
}

const PublicationAvatar: FC<PublicationAvatarProps> = ({
  publication,
  quoted = false
}) => {
  const { push } = useRouter();
  const targetPublication = publication;
  const profile = targetPublication.by;
  const { address } = useAccount();
  return (
    <Link
      className="contents"
      href={getProfile(profile).link}
      onClick={stopEventPropagation}
    >
      <Image
        alt={profile?.id}
        className={cn(
          quoted ? "size-6" : "size-11",
          "z-[1] cursor-pointer rounded-full border bg-gray-200 dark:border-gray-700"
        )}
        height={quoted ? 25 : 44}
        loading="lazy"
        onClick={() => push(getProfile(profile).link)}
        onError={({ currentTarget }) => {
          currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
        }}
        src={getAvatar(profile)}
        width={quoted ? 25 : 44}
      />
    </Link>
  );
};

export default memo(PublicationAvatar);
