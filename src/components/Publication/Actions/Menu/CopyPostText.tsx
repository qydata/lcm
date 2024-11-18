import type { Post } from "@lcm/lens";
import type { FC } from "react";

import { MenuItem } from "@headlessui/react";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { PUBLICATION } from "@lcm/data/tracking";
import getPublicationData from "@lcm/helpers/getPublicationData";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import cn from "@lcm/ui/cn";
import toast from "react-hot-toast";

interface CopyPostTextProps {
  publication: Post;
}

const CopyPostText: FC<CopyPostTextProps> = ({ publication }) => {
  const publicationType = publication.__typename;
  const filteredContent =
    getPublicationData(publication.metadata)?.content || "";

  return (
    <MenuItem
      as="div"
      className={({ focus }) =>
        cn(
          { "dropdown-active": focus },
          "m-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm"
        )
      }
      onClick={async (event) => {
        stopEventPropagation(event);
        await navigator.clipboard.writeText(filteredContent || "");
        toast.success("复制到剪贴板！");
        console.log(PUBLICATION.COPY_TEXT, {
          publication_id: publication.id
        });
      }}
    >
      <div className="flex items-center space-x-2">
        <ClipboardDocumentIcon className="size-4" />
        <div>
          {publicationType === "Comment" ? "复制评论文本" : "复制帖子文本"}
        </div>
      </div>
    </MenuItem>
  );
};

export default CopyPostText;
