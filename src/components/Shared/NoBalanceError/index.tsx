import type { Amount } from "@lcm/lens";
import type { FC, ReactNode } from "react";

import { STATIC_IMAGES_URL } from "@lcm/data/constants";
import { PUBLICATION } from "@lcm/data/tracking";
import getUniswapURL from "@lcm/helpers/getUniswapURL";
import Link from "next/link";

import WrapWmatic from "./WrapWmatic";

interface NoBalanceErrorProps {
  errorMessage?: ReactNode;
  moduleAmount: Amount;
}

const NoBalanceError: FC<NoBalanceErrorProps> = ({
  errorMessage,
  moduleAmount
}) => {
  const amount = moduleAmount?.value;
  const currency = moduleAmount?.asset?.symbol;
  const assetAddress = moduleAmount?.asset?.contract.address;

  if (currency === "WMATIC") {
    return (
      <WrapWmatic errorMessage={errorMessage} moduleAmount={moduleAmount} />
    );
  }

  return (
    <div className="space-y-1">
      <div className="text-sm">
        {errorMessage ? (
          errorMessage
        ) : (
          <span>
            You don't have enough <b>{currency}</b>
          </span>
        )}
      </div>
      <Link
        className="flex items-center space-x-1.5 font-bold text-pink-500 text-xs"
        href={getUniswapURL(Number.parseFloat(amount), assetAddress)}
        onClick={() => console.log(PUBLICATION.COLLECT_MODULE.OPEN_UNISWAP)}
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          alt="Uniswap"
          className="size-5"
          height={20}
          src={`${STATIC_IMAGES_URL}/brands/uniswap.png`}
          width={20}
        />
        <div>Swap in Uniswap</div>
      </Link>
    </div>
  );
};

export default NoBalanceError;
