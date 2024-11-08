import type {PublicationMetadata} from "@hey/lens";
import type {MetadataAsset} from "@hey/types/misc";

import {PLACEHOLDER_IMAGE} from "@hey/data/constants";
import getAttachmentsData from "./getAttachmentsData";

function isEncryptedPublicationMetadata(metadata: any) {
    return metadata.encryptedWith !== null;
}

const getPublicationData = (
    metadata: PublicationMetadata
): {
    asset?: MetadataAsset;
    attachments?: {
        type: "Audio" | "Image" | "Video";
        uri: string;
    }[];
    content?: string;
} | null => {
    const content = metadata?.content;
    if (!metadata) {
        return
    }
    switch (metadata.mainContentFocus) {
        case "ArticleMetadataV3":
            return {
                attachments: getAttachmentsData(metadata.attachments),
                content
            };
        case "TextOnlyMetadataV3":
        case "TEXT_ONLY":
        case "ARTICLE":
        case "LinkMetadataV3":
            return {content};
        case "ImageMetadataV3":
        case "IMAGE":
            return {
                asset: {
                    type: "Image",
                    uri: metadata.asset.image.raw?.uri
                },
                attachments: getAttachmentsData(metadata.attachments),
                content
            };
        case "AUDIO":
        case "AudioMetadataV3": {
            const audioAttachments = getAttachmentsData(metadata.attachments)[0];
            return {
                asset: {
                    artist: metadata.asset.audio.raw?.artist || audioAttachments?.artist,
                    cover:
                        metadata.asset.audio.raw?.cover ||
                        audioAttachments?.coverUri ||
                        PLACEHOLDER_IMAGE,
                    // TODO: Fix this type
                    license: metadata.asset.license as any,
                    title: metadata.title,
                    type: "Audio",
                    uri: metadata.asset.audio.raw?.uri || audioAttachments?.uri
                },
                content
            };
        }
        case "VIDEO":
        case "VideoMetadataV3": {
            const videoAttachments = getAttachmentsData(metadata.attachments)[0];

            return {
                asset: {
                    cover:
                        metadata.asset.video?.raw?.cover ||
                        videoAttachments?.coverUri ||
                        PLACEHOLDER_IMAGE,
                    // TODO: Fix this type
                    license: metadata.asset.license as any,
                    type: "Video",
                    uri: metadata.asset.video.raw?.uri || videoAttachments?.uri
                },
                content
            };
        }
        case "MintMetadataV3":
            return {
                attachments: getAttachmentsData(metadata.attachments),
                content: metadata.content
            };
        default:
            return null;
    }
};

export default getPublicationData;
