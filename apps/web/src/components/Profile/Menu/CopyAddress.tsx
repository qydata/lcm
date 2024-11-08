import type { Profile } from "@hey/lens";
import type { FC } from "react";

import { MenuItem } from "@headlessui/react";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { PROFILE } from "@hey/data/tracking";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import cn from "@hey/ui/cn";
import toast from "react-hot-toast";

interface CopyAddressProps {
  profile: Profile;
}

const CopyAddress: FC<CopyAddressProps> = ({ profile }) => {
  return (
    <MenuItem
      as="div"
      className={({ focus }) =>
        cn(
          { "dropdown-active": focus },
          "m-2 flex cursor-pointer items-center space-x-2 rounded-lg px-2 py-1.5 text-sm"
        )
      }
      onClick={async (event) => {
        stopEventPropagation(event);
        await navigator.clipboard.writeText(profile.ownedBy);
        toast.success("地址已复制到剪贴板！");
        console.log(PROFILE.COPY_PROFILE_ADDRESS, {
          address: profile.ownedBy,
          profile_id: profile?.id
        });
      }}
    >
      <ClipboardDocumentIcon className="size-4" />
      <div>复制地址</div>
    </MenuItem>
  );
};

export default CopyAddress;
