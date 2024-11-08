import {SupportedChains} from "./conditions";

export {SupportedChains};

export type EnvironmentConfig = {
    name: string;
    chainId: number;
    chainName: SupportedChains | string;
};

export const production: EnvironmentConfig = {
    name: "production",
    chainId: 27,
    chainName: SupportedChains.CT_CHAIN,
};

export const development: EnvironmentConfig = {
    name: "development",
    chainId: 80002,
    chainName: SupportedChains.AMOY
};

/**
 * We are using Polygon since Mumbai is no longer supported.
 * This seems to not affect tests automation, but it's worth noting.
 */
export const testing: EnvironmentConfig = {
    name: "development",
    chainId: 27,
    chainName: SupportedChains.CT_CHAIN
};
