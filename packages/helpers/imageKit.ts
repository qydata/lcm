import {
  IPFS_GATEWAY,
  IPFS_PROTOL,
  LENS_MEDIA_SNAPSHOT_URL
} from "@lcm/data/constants";

/**
 * Transforms the URL of an image to use ImageKit.
 *
 * @param url The original URL of the image.
 * @param name The transformation name (optional).
 * @returns A transformed URL.
 */
const imageKit = (url: string, name?: string): string => {
  if (!url) {
    return "";
  }

  if (url.includes(LENS_MEDIA_SNAPSHOT_URL)) {
    const splitedUrl = url.split("/");
    const path = splitedUrl[splitedUrl.length - 1];

    return name ? `${LENS_MEDIA_SNAPSHOT_URL}/${name},q-80/${path}` : url;
  }
  if (url.startsWith(IPFS_PROTOL)) {
    return url.replace(IPFS_PROTOL, IPFS_GATEWAY);
  }

  return url;
};

export default imageKit;
