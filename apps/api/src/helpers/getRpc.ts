import type { FallbackTransport } from "viem";

import { CTCHAIN_RPCS, POLYGON_AMOY_RPCS, POLYGON_RPCS } from "@hey/data/rpcs";
import { fallback, http } from "viem";

const getRpc = ({ net }: { net: string }): FallbackTransport => {
  switch (net) {
    case "testnet":
      return fallback(POLYGON_AMOY_RPCS.map((rpc) => http(rpc)));
    case "ctchain":
    default:
      return fallback(CTCHAIN_RPCS.map((rpc) => http(rpc)));
  }
};

export default getRpc;
