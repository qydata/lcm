import type { CachedMessage } from "@xmtp/react-sdk";
import { hasReaction, useReactions } from "@xmtp/react-sdk";
import type { FC } from "react";

import getTimeFromNow from "@lcm/helpers/datetime/getTimeFromNow";
import cn from "@lcm/ui/cn";
import { ContentTypeText } from "@xmtp/content-type-text";
import { useAccount } from "wagmi";
import { hydrateAuthSky } from "../../../store/persisted/useAuthStore";

interface MessagesProps {
  message: CachedMessage;
}

const Messages: FC<MessagesProps> = ({ message }) => {
  const { address } = useAccount();
  const reactions = useReactions(message);
  const messageHasReaction = hasReaction(message);
  const isSender = message.senderAddress === address;
  const { profile } = hydrateAuthSky();
  if (!profile) {
    localStorage.clear();
  }
  if (message.contentType === ContentTypeText.toString()) {
    return (
      <div
        className={cn("flex flex-col", { "items-end": isSender })}
        key={message.id}
      >
        <div className={cn("flex", { "justify-end": isSender })}>
          <div
            className={cn(
              isSender
                ? "bg-gray-700 text-white dark:bg-gray-100 dark:text-black"
                : "bg-gray-100 dark:bg-gray-700",
              "max-w-xs break-words rounded-3xl px-4 py-2",
              isSender ? "rounded-br-lg" : "rounded-bl-lg"
            )}
          >
            {message.content}
          </div>
        </div>
        <div className="ld-text-gray-500 mt-1 text-xs">
          {getTimeFromNow(message.sentAt)}
        </div>
        {messageHasReaction && (
          <div className="mt-1 mb-1 flex w-fit space-x-2 rounded-full">
            {reactions.map((reaction) => (
              <div key={reaction.id}>
                <span>{reaction.content}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Messages;
