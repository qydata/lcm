import type { Profile } from "@lcm/lens";
import { hydrateAuthSky } from "src/store/persisted/useAuthStore";
/**
 * Get current session
 * @returns {Object} Current session
 */
const getCurrentSession = (): undefined | Profile => {
  const { profile } = hydrateAuthSky();
  if (!profile) {
    return {
      profile: {
        id: 1
      }
    };
  } else {
    return profile;
  }
};

export default getCurrentSession;
