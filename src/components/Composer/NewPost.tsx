import type { FC } from "react";
import { useEffect, useState } from "react";

import getAvatar from "@lcm/helpers/getAvatar";

import { Card, Image } from "@lcm/ui";
import { useRouter } from "next/router";
import { usePublicationStore } from "src/store/non-persisted/publication/usePublicationStore";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import { useAccount } from "wagmi";
import NewPublication from "./NewPublication";

interface NewPostProps {
  tags?: string[];
}

const NewPost: FC<NewPostProps> = ({ tags }) => {
  const { isReady, query } = useRouter();
  const { currentProfile } = useProfileStore();
  const { setPublicationContent, setTags } = usePublicationStore();
  const [showComposer, setShowComposer] = useState(false);
  const { address } = useAccount();
  const openModal = () => {
    if (tags) {
      setTags(tags);
    }
    setShowComposer(true);
  };

  useEffect(() => {
    if (isReady && query.text) {
      const { hashtags, text, url, via } = query;
      let processedHashtags: string | undefined;

      if (hashtags) {
        processedHashtags = (hashtags as string)
          .split(",")
          .map((tag) => `#${tag} `)
          .join("");
      }

      const content = `${text}${
        processedHashtags ? ` ${processedHashtags} ` : ""
      }${url ? `\n\n${url}` : ""}${via ? `\n\nvia @${via}` : ""}`;

      openModal();
      setPublicationContent(content);
    }
  }, [query]);

  if (showComposer) {
    return <NewPublication />;
  }

  return (
    <Card className="cursor-pointer space-y-3 px-5 py-4" onClick={openModal}>
      <div className="flex items-center space-x-3">
        <Image
          alt={currentProfile?.id}
          className="size-11 cursor-pointer rounded-full border bg-gray-200 dark:border-gray-700"
          height={44}
          onError={({ currentTarget }) => {
            currentTarget.src = `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
          }}
          src={getAvatar(currentProfile)}
          width={44}
        />
        <span className="ld-text-gray-500">有什么新鲜事吗?!</span>
      </div>
    </Card>
  );
};

export default NewPost;
