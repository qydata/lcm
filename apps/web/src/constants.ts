import { LENS_NETWORK } from "@hey/data/constants";
import { polygon, polygonAmoy } from "wagmi/chains";

const ctchain = {
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

const mapping: any = {
  mainnet: polygon,
  testnet: polygonAmoy,
  ctchain: ctchain
};

export const CHAIN = mapping[LENS_NETWORK];
