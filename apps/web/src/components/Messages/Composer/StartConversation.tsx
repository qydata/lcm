import type {CachedConversation} from "@xmtp/react-sdk";
import {useCanMessage, useConsent, useStartConversation} from "@xmtp/react-sdk";
import type {ChangeEvent, FC} from "react";
import {useEffect, useRef, useState} from "react";
import type {Address} from "viem";

import LazyDefaultProfile from "@components/Shared/LazyDefaultProfile";
import {ArrowRightCircleIcon, EnvelopeIcon, NoSymbolIcon} from "@heroicons/react/24/outline";
import {MESSAGES} from "@hey/data/tracking";
import {Button, EmptyState, Input} from "@hey/ui";
import cn from "@hey/ui/cn";
import {useMessagesStore} from "src/store/non-persisted/useMessagesStore";
import {useAccount} from "wagmi";
import toast from "react-hot-toast";

const StartConversation: FC = () => {
    const {address} = useAccount();
    const {
        newConversationAddress,
        setNewConversationAddress,
        setSelectedConversation
    } = useMessagesStore();
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isNotOnXmtp, setIsNotOnXmtp] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const isStaff = false;
    const isSameUser = address === newConversationAddress;

    const {startConversation} = useStartConversation();
    const {canMessage} = useCanMessage();
    const {allow} = useConsent();

    const getIsOnXmtp = async () => {
        if (newConversationAddress) {
            setIsNotOnXmtp(!(await canMessage(newConversationAddress)));
        }
    };

    useEffect(() => {
        getIsOnXmtp();
    }, [newConversationAddress]);

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleStartConversation = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newConversationAddress && message) {
            setIsSending(true);
            await allow([newConversationAddress]);
            try {
                const conversation = await startConversation(
                    newConversationAddress,
                    message
                );
                setNewConversationAddress(null);
                setSelectedConversation(
                    conversation.cachedConversation as CachedConversation
                );
                setIsSending(false);
                console.log(MESSAGES.START_CONVERSATION);
            } catch (e) {
                setIsSending(false);
                toast.error(e.message);
                console.log(e)

            }
        }
    };

    return (
        <div>
            <div className="px-5 py-2.5">
                <LazyDefaultProfile address={newConversationAddress as Address}/>
            </div>
            <div className="divider"/>
            <div
                className={cn(
                    isStaff ? "h-[79vh] max-h-[79vh]" : "h-[81.5vh] max-h-[81.5vh]",
                    "flex items-center justify-center p-5"
                )}
            >
                <EmptyState
                    hideCard
                    icon={
                        isSameUser ? (
                            <NoSymbolIcon className="size-10"/>
                        ) : isNotOnXmtp ? (
                            <EnvelopeIcon className="size-10"/>
                        ) : (
                            <ArrowRightCircleIcon className="size-10"/>
                        )
                    }
                    message={
                        isSameUser
                            ? "You cannot message yourself"
                            : isNotOnXmtp
                                ? "User is not on XMTP"
                                : "Begin your conversation"
                    }
                />
            </div>
            <form
                className="flex items-center space-x-2 border-t p-5 dark:border-gray-700"
                onSubmit={handleStartConversation}
            >
                <Input
                    autoFocus
                    disabled={isSameUser || isNotOnXmtp || isSending}
                    onChange={handleMessageChange}
                    placeholder="键入消息..."
                    ref={inputRef}
                    type="text"
                    value={message}
                />
                <Button
                    disabled={isSameUser || isNotOnXmtp || isSending || !message}
                    type="submit"
                    className={`w-fit text-nowrap whitespace-nowrap`}
                    size={`lg`}
                >
                    发送
                </Button>
            </form>
        </div>
    )
        ;
};

export default StartConversation;
