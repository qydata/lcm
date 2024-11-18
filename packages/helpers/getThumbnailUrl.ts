import type {
  PublicationMetadataMediaAudio,
  PublicationMetadataMediaVideo
} from "@lcm/lens";

import { STATIC_IMAGES_URL } from "@lcm/data/constants";

import sanitizeDStorageUrl from "./sanitizeDStorageUrl";

/**
 * Returns the thumbnail URL for the specified publication metadata.
 *
 * @param metadata The publication metadata.
 * @returns The thumbnail URL.
 */
const getThumbnailUrl = (
  metadata?: PublicationMetadataMediaAudio | PublicationMetadataMediaVideo
): string => {
  const fallbackUrl = `${STATIC_IMAGES_URL}/thumbnail.png`;

  if (!metadata) {
    return fallbackUrl;
  }

  const { cover } = metadata;
  const url = cover?.optimized?.uri || fallbackUrl;

  return sanitizeDStorageUrl(url);
};

export default getThumbnailUrl;
