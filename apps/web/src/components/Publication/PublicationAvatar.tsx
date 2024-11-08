import type {FC} from "react";
import {memo} from "react";

import getAvatar from "@hey/helpers/getAvatar";
import getProfile from "@hey/helpers/getProfile";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import {Image} from "@hey/ui";
import cn from "@hey/ui/cn";
import Link from "next/link";
import {useRouter} from "next/router";
import {useAccount} from "wagmi";
import {Post} from "@components/Common/gated/graphql";


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
  const {address} = useAccount();
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
