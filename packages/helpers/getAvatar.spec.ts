import {
  AVATAR,
  IPFS_GATEWAY,
  LCM_API_URL,
  LCM_IMAGEKIT_URL
} from "@lcm/data/constants";
import { describe, expect, test } from "vitest";

import getAvatar from "./getAvatar";

describe("getAvatar", () => {
  const ipfsLink = `${IPFS_GATEWAY}/bafkreianwlir2groq5l52zdnikon4rtgjcostjosaadbbfekgpzhaprmri`;
  const imagekitUrl = `${LCM_IMAGEKIT_URL}/fallback/${AVATAR},q-80/https://gw.ipfs-lens.dev/ipfs/bafkreianwlir2groq5l52zdnikon4rtgjcostjosaadbbfekgpzhaprmri`;

  test("should return normal profile optimized avatar url", () => {
    const profile = {
      metadata: { picture: { optimized: { uri: ipfsLink } } }
    };
    const result = getAvatar(profile);
    expect(result).toBe(imagekitUrl);
  });

  test("should return normal profile optimized raw url", () => {
    const profile = {
      metadata: { picture: { raw: { uri: ipfsLink } } }
    };
    const result = getAvatar(profile);
    expect(result).toBe(imagekitUrl);
  });

  test("should return nft profile optimized avatar url", () => {
    const profile = {
      metadata: { picture: { image: { optimized: { uri: ipfsLink } } } }
    };
    const result = getAvatar(profile);
    expect(result).toBe(imagekitUrl);
  });

  test("should return nft profile optimized raw url", () => {
    const profile = {
      metadata: { picture: { image: { raw: { uri: ipfsLink } } } }
    };
    const result = getAvatar(profile);
    expect(result).toBe(imagekitUrl);
  });

  test("should use profile's ownedBy address to build URL when all else fails", () => {
    const profile = { id: "0x0d" };
    const result = getAvatar(profile);
    expect(result).toBe(`${LCM_API_URL}/avatar?id=0x0d`);
  });
});
