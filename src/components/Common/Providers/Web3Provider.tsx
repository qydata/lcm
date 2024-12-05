import type {FC, ReactNode} from "react";

import {WALLETCONNECT_PROJECT_ID} from "@lcm/data/constants";
import {CTCHAIN_RPCS} from "@lcm/data/rpcs";
import {createConfig, createStorage, fallback, http, WagmiProvider} from "wagmi";
import {injected, walletConnect} from "wagmi/connectors";

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
        default: {name: "CT Explorer", url: "https://ctblock.cn"}
    }
};
const connectors = [
    injected(),
    walletConnect({
        disableProviderPing: false,
        projectId: WALLETCONNECT_PROJECT_ID,
        qrModalOptions: {
            // themeMode: 'dark',
            desktopWallets: [],
            mobileWallets: [],
            enableExplorer: false,
            explorerRecommendedWalletIds: "NONE"
        }
    })
];
let storage;

if (typeof window !== 'undefined') {
    // 只有在客户端（浏览器）中才使用 localStorage
    storage = createStorage({
        storage: localStorage, // 或 cookieStorage
    });
} else {
    // 如果在服务器端，可以使用一个空对象或其他替代方案
    storage = createStorage({
        storage: {} // 或者一个简单的内存存储
    });
}
const wagmiConfig = createConfig({
    chains: [ctchain],
    connectors,
    transports: {
        [ctchain.id]: fallback(CTCHAIN_RPCS.map((rpc) => http(rpc)))
    },
    storage,
    // storage: createStorage({
    //     storage: cookieStorage,
    // }),
});

interface Web3ProviderProps {
    children: ReactNode;
}

const Web3Provider: FC<Web3ProviderProps> = ({children}) => {
    return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
};

export default Web3Provider;
