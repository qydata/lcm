import type { Post } from "@lcm/lens";
import type { FC } from "react";

import { MenuItem } from "@headlessui/react";

import { LanguageIcon } from "@heroicons/react/24/outline";
import { PUBLICATION } from "@lcm/data/tracking";
import getPublicationData from "@lcm/helpers/getPublicationData";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import cn from "@lcm/ui/cn";
import Link from "next/link";
import urlcat from "urlcat";

interface TranslateProps {
  publication: Post;
}

const Translate: FC<TranslateProps> = ({ publication }) => {
  const filteredContent =
    getPublicationData(publication.metadata)?.content || "";

  if (filteredContent.length < 1) {
    return null;
  }

  const getGoogleTranslateUrl = (text: string): string => {
    return encodeURI(
      urlcat("https://translate.google.com/#auto|en|:text", { text })
    );
  };

  return (
    <MenuItem
      as={Link}
      className={({ focus }) =>
        cn(
          { "dropdown-active": focus },
          "m-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm"
        )
      }
      href={getGoogleTranslateUrl(filteredContent || "")}
      onClick={(event) => {
        stopEventPropagation(event);
        console.log(PUBLICATION.TRANSLATE, {
          publication_id: publication.id
        });
      }}
      target="_blank"
    >
      <div className="flex items-center space-x-2">
        <LanguageIcon className="size-4" />
        <div>翻译</div>
      </div>
    </MenuItem>
  );
};

export default Translate;
