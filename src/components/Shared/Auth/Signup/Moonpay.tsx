import type { FC } from "react";

import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { MOONPAY_URL } from "@lcm/data/constants";
import { Button } from "@lcm/ui";
import urlcat from "urlcat";
import { useAccount } from "wagmi";

interface MoonpayProps {
  disabled: boolean;
}

const Moonpay: FC<MoonpayProps> = ({ disabled }) => {
  const { address } = useAccount();

  const handleBuy = () => {
    return window.open(
      urlcat(MOONPAY_URL, {
        currencyCode: "草田分",
        redirectURL: window.location.href,
        walletAddress: address
      }),
      "_blank"
    );
  };

  return (
    <Button
      className="w-full justify-center"
      disabled={disabled}
      icon={<CurrencyDollarIcon className="size-5" />}
      onClick={handleBuy}
    >
      充值草田分
    </Button>
  );
};

export default Moonpay;
