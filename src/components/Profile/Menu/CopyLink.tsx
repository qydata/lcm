import type { Profile } from "@lcm/lens";
import type { FC } from "react";

import { MenuItem } from "@headlessui/react";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { PROFILE } from "@lcm/data/tracking";
import getProfile from "@lcm/helpers/getProfile";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import cn from "@lcm/ui/cn";
import toast from "react-hot-toast";

interface CopyLinkProps {
  profile: Profile;
}

const CopyLink: FC<CopyLinkProps> = ({ profile }) => {
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
        await navigator.clipboard.writeText(
          `${location.origin}${getProfile(profile).link}`
        );
        toast.success("链接已复制到剪贴板！");
        console.log(PROFILE.COPY_PROFILE_LINK, { profile_id: profile?.id });
      }}
    >
      <ClipboardDocumentIcon className="size-4" />
      <div>复制链接</div>
    </MenuItem>
  );
};

export default CopyLink;
