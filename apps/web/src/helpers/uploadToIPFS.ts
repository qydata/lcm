import type {IPFSResponse} from "@hey/types/misc";
import axios from "axios";

const FALLBACK_TYPE = "image/jpeg";


/**
 * Uploads a set of files to the IPFS network via S3 and returns an array of MediaSet objects.
 *
 * @param data Files to upload to IPFS.
 * @param onProgress Callback to be called when the upload progress changes.
 * @returns Array of MediaSet objects.
 */
const uploadToIPFS = async (
    data: any,
    onProgress?: (percentage: number) => void
): Promise<Awaited<{ mimeType: string; uri: string }>[]> => {
    try {
        const files = Array.from(data);
        const attachments = await Promise.all(
            files.map(async (_: any, i: number) => {
                const file = data[i];

                const formData = new FormData();
                formData.append("file", file);
                const response = await axios.post(
                    "https://nft.ctsign.cn/ipfs/api/v0/add",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );
                const cid = response.data.Hash;
                return {mimeType: file.type || FALLBACK_TYPE, uri: `ipfs://${cid}`};
            })
        );
        return attachments;

    } catch (err) {
        console.trace(err)
        return [];
    }
};

const uploadDataToIPFS = async (
    data: string,
    onProgress?: (percentage: number) => void
): Promise<{ mimeType: string; uri: string }> => {
    try {
        const formData = new FormData();
        formData.append("file", JSON.stringify(data));
        const response = await axios.post(
            "https://nft.ctsign.cn/ipfs/api/v0/add",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );
        const cid = response.data.Hash;
        return {mimeType: "txt" || FALLBACK_TYPE, uri: `ipfs://${cid}`};
    } catch (err) {
        console.trace(err)
        return {mimeType: "txt" || FALLBACK_TYPE, uri: ""};
    }
};

/**
 * Uploads a file to the IPFS network via S3 and returns a MediaSet object.
 *
 * @param file File to upload to IPFS.
 * @returns MediaSet object or null if the upload fails.
 */
export const uploadFileToIPFS = async (
    file: File,
    onProgress?: (percentage: number) => void
): Promise<IPFSResponse> => {
    try {
        const ipfsResponse = await uploadToIPFS([file], onProgress);
        const metadata = ipfsResponse[0];

        return {mimeType: file.type || FALLBACK_TYPE, uri: metadata.uri};
    } catch {
        return {mimeType: file.type || FALLBACK_TYPE, uri: ""};
    }
};
const getFromIPFS = async (
    cid: string
): Promise<string | null> => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://nft.ctsign.cn/ipfs/api/v0/cat?arg=${cid}&encoding=json`,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {
    uploadToIPFS,
    uploadDataToIPFS,
    getFromIPFS
};
