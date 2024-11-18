import type { FC } from "react";

import { Card, CardHeader, H6 } from "@lcm/ui";
import toast from "react-hot-toast";
import { hydrateAuthSky } from "src/store/persisted/useAuthStore";

const Tokens: FC = () => {
  const { profile } = hydrateAuthSky();

  return (
    <>
      <Card>
        <CardHeader title="您的临时访问令牌" />
        <button
          className="m-5 cursor-pointer break-all rounded-md bg-gray-300 p-2 px-3 text-left dark:bg-gray-600"
          onClick={() => {
            toast.success("Copied to clipboard");
            navigator.clipboard.writeText(profile?.id as string);
          }}
          type="button"
        >
          <H6>{profile?.id}</H6>
        </button>
      </Card>
    </>
  );
};

export default Tokens;
