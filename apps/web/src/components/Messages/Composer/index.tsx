import type {CachedConversation} from "@xmtp/react-sdk";
import {useSendMessage} from "@xmtp/react-sdk";
import type {ChangeEvent, FC} from "react";
import {useEffect, useRef, useState} from "react";
import {MESSAGES} from "@hey/data/tracking";
import {Button, Input} from "@hey/ui";

interface ComposerProps {
    conversation: CachedConversation;
}

const Composer: FC<ComposerProps> = ({conversation}) => {
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const {sendMessage} = useSendMessage();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [conversation]);

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (conversation.peerAddress && message) {
            setMessage("");
            inputRef.current?.focus();
            await sendMessage(conversation, message);
            console.log(MESSAGES.SEND_MESSAGE);
        }
    };

    return (
        <form
            className="flex items-center space-x-2 border-t p-5 dark:border-gray-700"
            onSubmit={handleSendMessage}
        >
            <Input
                autoFocus
                onChange={handleMessageChange}
                placeholder="键入消息..."
                ref={inputRef}
                type="text"
                value={message}
            />
            <Button disabled={!message}
                    className={ `w-fit text-nowrap whitespace-nowrap`}
                    size={`lg`}
                    type="submit">
                发送
            </Button>
        </form>
    );
};

export default Composer;
