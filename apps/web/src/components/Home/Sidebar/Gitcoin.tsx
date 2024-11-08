import type { FC } from "react";

import CountdownTimer from "@components/Shared/CountdownTimer";
import { rubikMonoOneFont } from "@helpers/fonts";

import { APP_NAME, STATIC_IMAGES_URL } from "@hey/data/constants";
import { MISCELLANEOUS } from "@hey/data/tracking";
import { Button, Card } from "@hey/ui";
import Link from "next/link";

const Gitcoin: FC = () => {
  return (
    <Card
      as="aside"
      className="!border-[#3D614D] !bg-[#3D614D]/10 mb-4 space-y-4 p-5 text-[#3D614D] dark:bg-[#3D614D]/50"
    >
      <img
        alt="Gitcoin emoji"
        className="mx-auto h-20"
        src={`${STATIC_IMAGES_URL}/brands/gitcoin.svg`}
      />
      <div className="space-y-3 text-center">
        <b>Support {APP_NAME} on Gitcoin Grants Round 21</b>
        <div className={rubikMonoOneFont.className}>
          <CountdownTimer targetDate="2024-08-21T23:59:00+00:00" />
        </div>
        <div>
          <Link
            className="font-bold underline"
            href="https://lcm.xyz/gitcoin"
            onClick={() => console.log(MISCELLANEOUS.OPEN_GITCOIN)}
            target="_blank"
          >
            <Button size="lg">Contribute now</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Gitcoin;
