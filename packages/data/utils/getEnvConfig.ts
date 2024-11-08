import {LENS_NETWORK} from "../constants";
import {CtChainContracts, TestnetContracts} from "../contracts";
import LensEndpoint from "../lens-endpoints";

const getEnvConfig = (): {
    defaultCollectToken: string;
    heyLensSignup: `0x${string}`;
    heyTipping: `0x${string}`;
    lensApiEndpoint: string;
    lensHandles: `0x${string}`;
    lensHub: `0x${string}`;
    RsaSignUp: `0x${string}`;
    permissionlessCreator?: `0x${string}`;
    tokenHandleRegistry: `0x${string}`;
} => {
    switch (LENS_NETWORK) {
        case "ctchain":
            return {
                defaultCollectToken: CtChainContracts.DefaultToken,
                heyLensSignup: CtChainContracts.HeyLensSignup,
                heyTipping: CtChainContracts.HeyTipping,
                lensApiEndpoint: LensEndpoint.Ctchain,
                lensHandles: CtChainContracts.LensHandles,
                lensHub: CtChainContracts.LensHub,
                RsaSignUp: CtChainContracts.RsaSignUp,
                permissionlessCreator: CtChainContracts.PermissionlessCreator,
                tokenHandleRegistry: CtChainContracts.TokenHandleRegistry
            };
        default:
            return {
                RsaSignUp: CtChainContracts.RsaSignUp,
                defaultCollectToken: TestnetContracts.DefaultToken,
                heyLensSignup: TestnetContracts.HeyLensSignup,
                heyTipping: TestnetContracts.HeyTipping,
                lensApiEndpoint: LensEndpoint.Testnet,
                lensHandles: TestnetContracts.LensHandles,
                lensHub: TestnetContracts.LensHub,
                permissionlessCreator: TestnetContracts.PermissionlessCreator,
                tokenHandleRegistry: TestnetContracts.TokenHandleRegistry
            };
    }
};

export default getEnvConfig;
