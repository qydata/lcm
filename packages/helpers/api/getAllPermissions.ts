import type { Permission } from "@lcm/types/hey";

import { LCM_API_URL } from "@lcm/data/constants";
import axios from "axios";

/**
 * Get all permissions
 * @param headers auth headers
 * @returns all permissions
 */
const getAllPermissions = async (headers: any): Promise<Permission[]> => {
  const response = await axios.get(`${LCM_API_URL}/internal/permissions/all`, {
    headers
  });
  const { data } = response;

  return data?.permissions || [];
};

export default getAllPermissions;
