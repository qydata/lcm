import type { Club } from "@hey/types/club";

import { LCM_API_URL } from "@hey/data/constants";
import axios from "axios";

export interface Payload {
  club_handle?: null | string;
  id?: null | string;
  limit?: null | number;
  profile_id?: null | string;
  query?: null | string;
  skip?: null | number;
}

const getClubs = async (payload: Payload): Promise<[] | Club[]> => {
  try {
    const response = await axios.post(`${LCM_API_URL}/clubs/get`, payload);

    return response.data.data.items;
  } catch {
    return [];
  }
};

export default getClubs;
