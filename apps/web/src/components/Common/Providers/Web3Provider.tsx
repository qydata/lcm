import type {FC, ReactNode} from "react";

import {WALLETCONNECT_PROJECT_ID} from "@hey/data/constants";
import {CTCHAIN_RPCS} from "@hey/data/rpcs";
import {createConfig, fallback, http, WagmiProvider} from "wagmi";
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
        projectId: WALLETCONNECT_PROJECT_ID

    }),
    walletConnect({
        projectId: WALLETCONNECT_PROJECT_ID,
        showQrModal: false
    }),
];
const wagmiConfig = createConfig({
    chains: [ctchain],
    connectors,
    transports: {
        [ctchain.id]: fallback(CTCHAIN_RPCS.map((rpc) => http(rpc)))
    },
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
