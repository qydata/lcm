import type { FC } from "react";

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { SYSTEM } from "@lcm/data/tracking";
import { Button } from "@lcm/ui";
import { useSwitchChain } from "wagmi";

interface SwitchNetworkProps {
  className?: string;
  onSwitch?: () => void;
  title?: string;
  toChainId: number;
}

const SwitchNetwork: FC<SwitchNetworkProps> = ({
  className = "",
  onSwitch,
  title = "Switch Network",
  toChainId
}) => {
  const { switchChain } = useSwitchChain();

  return (
    <Button
      className={className}
      icon={<ArrowsRightLeftIcon className="size-4" />}
      onClick={() => {
        onSwitch?.();
        switchChain?.({ chainId: toChainId });
        console.log(SYSTEM.SWITCH_NETWORK, { chain: toChainId });
      }}
      type="button"
      variant="danger"
    >
      {title}
    </Button>
  );
};

export default SwitchNetwork;
