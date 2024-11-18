import type { Profile } from "@lcm/lens";
import type { FC, ReactNode } from "react";

import getProfile from "@lcm/helpers/getProfile";
import cn from "@lcm/ui/cn";
import Link from "next/link";

import Slug from "./Slug";

interface FallbackProfileNameProps {
  className?: string;
  profile?: Profile;
  separator?: ReactNode;
}

const FallbackProfileName: FC<FallbackProfileNameProps> = ({
  className = "",
  profile,
  separator = ""
}) => {
  if (!profile) {
    return null;
  }

  const { displayName, link, slugWithPrefix } = getProfile(profile);
  const profileName = profile?.metadata?.displayName || (
    <Slug slug={slugWithPrefix} />
  );

  return (
    <>
      <Link
        aria-label={`Profile of ${displayName || slugWithPrefix}`}
        className={cn(
          "max-w-sm truncate outline-none hover:underline focus:underline",
          className
        )}
        href={link}
      >
        <b className="whitespace-nowrap">{profileName}</b>
      </Link>
      {separator && <span>{separator}</span>}
    </>
  );
};

export default FallbackProfileName;
