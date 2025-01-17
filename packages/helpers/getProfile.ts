import type { Profile } from "@lcm/lens";

import sanitizeDisplayName from "./sanitizeDisplayName";

const getProfile = (
  profile: null | Profile,
  source?: string
): {
  displayName: string;
  link: string;
  slug: string;
  slugWithPrefix: string;
  sourceLink: string;
  staffLink: string;
} => {
  if (!profile) {
    return {
      displayName: "...",
      link: "",
      slug: "...",
      slugWithPrefix: "...",
      sourceLink: "",
      staffLink: ""
    };
  }

  const prefix = profile.handle ? "@" : "#";
  const slug = profile.handle?.localName || profile?.id;
  const link = `/u`;

  return {
    displayName: sanitizeDisplayName(profile.metadata?.displayName) || slug,
    link: link,
    slug,
    slugWithPrefix: `${prefix}${slug}`,
    sourceLink: source ? `${link}?source=${source}` : link,
    staffLink: `/staff/users/${profile?.id}`
  };
};

export default getProfile;
