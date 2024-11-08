import type { FC } from "react";

import { Card, H5 } from "@hey/ui";

import WalletSelector from "../Auth/WalletSelector";

const WrongWallet: FC = () => {
  return (
    <Card className="linkify space-y-2 p-5">
      <div className="space-y-3 pb-2">
        <H5>切换到正确的钱包</H5>
        <p>
          您需要切换到正确的钱包来管理此个人资料。请
          切换到正确的钱包以管理此个人资料。
        </p>
      </div>
      <WalletSelector />
    </Card>
  );
};

export default WrongWallet;
