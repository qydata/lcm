import { hydrateAuthSky } from "src/store/persisted/useAuthStore";

const commonHeaders = {
  "X-Identity-Token": hydrateAuthSky().identityToken
};

/**
 * Get auth api headers
 * @returns Auth api headers
 */
export const getAuthApiHeadersWithAccessToken = () => {
  return {
    // "X-Access-Token": hydrateAuthSky().accessToken,
    ...commonHeaders
  };
};

export const getAuthApiHeaders = () => {
  return commonHeaders;
};
