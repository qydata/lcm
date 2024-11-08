import { LCM_API_URL } from "@hey/data/constants";
import { Errors } from "@hey/data/errors";
import axios from "axios";
import toast from "react-hot-toast";

/**
 * Uploads the given data to Arweave.
 *
 * @param data The data to upload.
 * @returns The Arweave transaction ID.
 * @throws An error if the upload fails.
 */
const uploadToIrys = async (data: any): Promise<string> => {
  try {
    const upload = await axios.post(`${LCM_API_URL}/irys/metadata`, {
      ...data
    });
    const { id }: { id: string } = upload.data;

    return id;
  } catch {
    toast.error(Errors.SomethingWentWrong);
    throw new Error(Errors.SomethingWentWrong);
  }
};

export default uploadToIrys;
