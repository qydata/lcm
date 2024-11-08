export const LCM_USER_AGENT = "HeyBot/0.1 (like TwitterBot)";
export const FLAGS_API_URL = "https://ctblock.cn/proxy";

// Cache
// Cache for 30 minutes
export const CACHE_AGE_30_MINS = "public, s-maxage=1800, max-age=1800";
// Cache for 6 hours
export const CACHE_AGE_6_HOURS = "public, s-maxage=21600, max-age=21600";
// Cache for 1 day
export const CACHE_AGE_1_DAY = "public, s-maxage=86400, max-age=86400";
// Cache for 30 days
export const CACHE_AGE_30_DAYS = "public, s-maxage=2592000, max-age=2592000";
// Cache indefinitely
export const CACHE_AGE_INDEFINITE =
  "public, s-maxage=31536000, max-age=31536000, immutable";

// Tests
export const SITEMAP_BATCH_SIZE = 50000;

export const ctchain = {
  id: 27, // 自定义链的 chainId
  name: "草田链",
  network: "ct-chain", // 自定义网络名称
  nativeCurrency: {
    name: "CT",
    symbol: "CT",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://ctblock.cn/blockChain"] // 自定义链的 RPC URL
    },
    public: {
      http: ["https://ctblock.cn/blockChain"]
    }
  },
  blockExplorers: {
    default: { name: "CT Explorer", url: "https://ctblock.cn" }
  }
};
