import type { Maybe, PublicationMetadataMedia } from "@lcm/lens";

const getAttachmentsData = (
  attachments?: Maybe<PublicationMetadataMedia[]>
): any => {
  if (!attachments) {
    return [];
  }

  return attachments.map((attachment) => {
    if (attachment.mimeType.startsWith("image/")) {
      return {
        type: "Image",
        uri: attachment?.uri
      };
    } else if (attachment.mimeType.startsWith("video/")) {
      return {
        coverUri: attachment?.cover,
        type: "Video",
        uri: attachment?.uri
      };
    } else if (attachment.mimeType.startsWith("audio/")) {
      debugger;
      return {
        artist: attachment.artist,
        coverUri: attachment?.cover,
        type: "Audio",
        uri: attachment?.uri
      };
    } else {
      return [];
    }
  });
};

export default getAttachmentsData;
