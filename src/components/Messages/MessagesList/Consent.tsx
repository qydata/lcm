import type { FC } from "react";
import type { Address } from "viem";

import { MESSAGES } from "@lcm/data/tracking";
import { Button } from "@lcm/ui";
import { useClient, useConsent } from "@xmtp/react-sdk";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ConsentProps {
  address: Address;
}

const Consent: FC<ConsentProps> = ({ address }) => {
  const [allowed, setAllowed] = useState<boolean>(true);
  const [allowing, setAllowing] = useState<boolean>(false);
  const [denying, setDenying] = useState<boolean>(false);

  const { client } = useClient();
  const { allow, deny, isAllowed } = useConsent();

  const getIsAllowed = async () => {
    const allowed = await isAllowed(address);
    return setAllowed(allowed);
  };

  useEffect(() => {
    if (client?.address) {
      getIsAllowed();
    }
  }, [address]);

  const handleAllow = async () => {
    try {
      setAllowing(true);
      await allow([address]);
      setAllowed(true);
      console.log(MESSAGES.ALLOW_USER, { address });

      return toast.success("Allowed");
    } finally {
      setAllowing(false);
    }
  };

  const handleDeny = async () => {
    try {
      setDenying(true);
      await deny([address]);
      setAllowed(false);
      console.log(MESSAGES.BLOCK_USER, { address });

      return toast.success("Blocked");
    } finally {
      setDenying(false);
    }
  };

  if (allowed) {
    return null;
  }

  return (
    <div className="space-x-2">
      <Button
        disabled={allowing}
        onClick={handleAllow}
        outline
        size="sm"
        variant="primary"
      >
        Allow
      </Button>
      <Button
        disabled={denying}
        onClick={handleDeny}
        outline
        size="sm"
        variant="danger"
      >
        Block
      </Button>
    </div>
  );
};

export default Consent;
