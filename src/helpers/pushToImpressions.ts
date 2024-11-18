import { IS_MAINNET } from "@lcm/data/constants";

import getCurrentSession from "./getCurrentSession";

/**
 * Push publication to impressions queue
 * @param id Publication ID
 * @returns void
 */
const pushToImpressions = (id: string): void => {
  const { profile } = getCurrentSession();

  // Don't push impressions for the current user
  const publicationProfileId = id.split("-")[0];
  if (publicationProfileId === profile?.id) {
    return;
  }

  if (IS_MAINNET && id && navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage({
      id,
      type: "PUBLICATION_VISIBLE"
    });
  }

  return;
};

export default pushToImpressions;
