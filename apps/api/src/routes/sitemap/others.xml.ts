import type { Handler } from "express";

import logger from "@hey/helpers/logger";
import catchedError from "src/helpers/catchedError";
import { buildUrlsetXml } from "src/helpers/sitemap/buildSitemap";

export const get: Handler = (req, res) => {
  const user_agent = req.headers["user-agent"];

  try {
    const sitemaps = [
      "https://lcm.xyz",
      "https://lcm.xyz/pro",
      "https://lcm.xyz/thanks",
      "https://lcm.xyz/terms",
      "https://lcm.xyz/privacy",
      "https://lcm.xyz/rules"
    ];

    const entries = sitemaps.map((sitemap) => ({ loc: sitemap }));
    const xml = buildUrlsetXml(entries);

    logger.info(`[Lens] Fetched other sitemaps from user-agent: ${user_agent}`);

    return res.status(200).setHeader("Content-Type", "text/xml").send(xml);
  } catch (error) {
    return catchedError(res, error);
  }
};
