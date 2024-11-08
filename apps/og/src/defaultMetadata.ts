import type { Metadata } from "next";

import { APP_NAME, DEFAULT_OG, DESCRIPTION } from "@hey/data/constants";

const defaultMetadata: Metadata = {
  alternates: { canonical: "https://lcm.xyz" },
  applicationName: APP_NAME,
  description: DESCRIPTION,
  keywords: [
    "hey",
    "lcm.xyz",
    "social media",
    "lenster",
    "polygon",
    "lens",
    "lens protocol",
    "decentralized",
    "web3"
  ],
  metadataBase: new URL("https://lcm.xyz"),
  openGraph: {
    images: [DEFAULT_OG],
    siteName: "Lcm",
    type: "website"
  },
  title: APP_NAME,
  twitter: { card: "summary_large_image", site: "@heydotxyz" }
};

export default defaultMetadata;
