import packageJson from "../../package.json";
import LensEndpoint from "./lens-endpoints";
import getEnvConfig from "./utils/getEnvConfig";

// Environments
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";

// Lens and Lcm Env Config
export const LENS_NETWORK = process.env.NEXT_PUBLIC_LENS_NETWORK || "ctchain";

export const LENS_API_URL = getEnvConfig().lensApiEndpoint;
export const LCM_API_URL = "http://localhost:4784";
export const LENS_HUB = getEnvConfig().lensHub;
export const RsaSignUp = getEnvConfig().RsaSignUp;
export const LENS_HANDLES = getEnvConfig().lensHandles;
export const TOKEN_HANDLE_REGISTRY = getEnvConfig().tokenHandleRegistry;
export const LCM_LENS_SIGNUP = getEnvConfig().heyLensSignup;
export const DEFAULT_COLLECT_TOKEN = getEnvConfig().defaultCollectToken;
export const LCM_TIPPING = getEnvConfig().heyTipping;

export const IS_MAINNET = LENS_API_URL === LensEndpoint.Ctchain;
export const ADDRESS_PLACEHOLDER = "0x03Ba3...7EF";

// Application
export const APP_NAME = "Lcm";
export const DESCRIPTION = `${APP_NAME}.xyz 是一个去中心化、无需许可的社交媒体应用程序，一个去中心化协议驱动的全新社交网络。`;
export const APP_VERSION = packageJson.version;
export const BRAND_COLOR = "#FB3A5D";
export const MAX_UINT256 = 2n ** 256n - 1n;

// Git
export const GIT_COMMIT_SHA =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "0000000";

// Misc
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const COLLECT_FEES_ADDRESS =
  "0x69696378FaEd01315c762e5122fFFBc7bab03570";
export const PRO_EOA_ADDRESS = "0xCAFEfB235AE1c10dC579338d06D90F0c89c4e5D6";
export const TEST_WALLET_ADDRESS = "0xb9C6e304545386E95d5c4ab183EE97A13555A49d";
export const TEST_PK =
  "0x8b33302ca865bc1ed65bc02b71dd02067bd3dae3da2f8bb0d95b16509e9ac71e";
export const TEST_LENS_ID = "0x43";
export const TEST_NON_STAFF_LENS_ID = "0x4c";
export const HANDLE_PREFIX = "lens/";
export const CLUB_HANDLE_PREFIX = "club/";
export const SIGNUP_PRICE = IS_MAINNET ? 8 : 1;
export const MONTHLY_PRO_PRICE = 10;

// URLs
export const STATIC_ASSETS_URL = "https://hey-assets.b-cdn.net";
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`;
export const LENS_MEDIA_SNAPSHOT_URL =
  "https://ik.imagekit.io/lens/media-snapshot";
const BROWSWE_URLS: any = {
  testnet: "https://amoy.polygonscan.com",
  ctchain: "https://ctblock.cn"
};
export const BROWSWE_URL: string = BROWSWE_URLS[LENS_NETWORK];
export const IPFS_GATEWAY = "https://ctblock.cn/";
export const IPFS_PROTOL = "ipfs://";
export const ARWEAVE_GATEWAY = "https://gateway.irys.xyz";
export const DEFAULT_OG = `/images/og/cover.png`;
export const PLACEHOLDER_IMAGE = `/images/placeholder.webp`;
export const MOONPAY_URL = IS_MAINNET;
("https://tools.ctblock.cn/charge");
export const LCM_IMAGEKIT_URL = "https://ctblock.cn/";

// Tokens / Keys
export const WALLETCONNECT_PROJECT_ID = "356289ab9a426922276438705a7f7337";
export const GIPHY_KEY = "yNwCXMKkiBrxyyFduF56xCbSuJJM8cMd";

// Named transforms for ImageKit
export const AVATAR = "tr:w-350,h-350";
export const EXPANDED_AVATAR = "tr:w-1000,h-1000";
export const COVER = "tr:w-1350,h-350";
export const VIDEO_THUMBNAIL = "tr:h-1000";
export const ATTACHMENT = "tr:w-1000";

// Known Lens Protocol Attributes
export const KNOWN_ATTRIBUTES = {
  HIDE_OEMBED: "hideOembed",
  POLL_ID: "heyPollId"
};
