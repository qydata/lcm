import type { FrameTransaction, Frame as IFrame } from "@lcm/types/misc";
import type { FC } from "react";

import { getAuthApiHeadersWithAccessToken } from "@helpers/getAuthApiHeaders";

import { BoltIcon, LinkIcon } from "@heroicons/react/24/outline";
import { LCM_API_URL } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { PUBLICATION } from "@lcm/data/tracking";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { Button, Card, Input, Modal } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { createTrackedSelector } from "react-tracked";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { create } from "zustand";

import Transaction from "./Transaction";

interface ShowTransactionState {
  frame: IFrame | null;
  index: number;
  show: boolean;
  transaction: FrameTransaction | null;
}

interface FramesState {
  frameData: IFrame | null;
  inputText: string;
  isLoading: boolean;
  setFrameData: (frameData: IFrame | null) => void;
  setInputText: (inputText: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setShowTransaction: (showTransaction: ShowTransactionState) => void;
  showTransaction: ShowTransactionState;
}

export const useFramesStore = createTrackedSelector(
  create<FramesState>((set) => ({
    frameData: null,
    inputText: "",
    isLoading: false,
    setFrameData: (frameData) => set({ frameData }),
    setInputText: (inputText) => set({ inputText }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setShowTransaction: (showTransaction) => set({ showTransaction }),
    showTransaction: {
      frame: null,
      index: 0,
      show: false,
      transaction: null
    }
  }))
);

interface FrameProps {
  frame: IFrame;
  publicationId?: string;
}

const Frame: FC<FrameProps> = ({ frame, publicationId }) => {
  const { currentProfile } = useProfileStore();
  const {
    frameData,
    inputText,
    isLoading,
    setFrameData,
    setInputText,
    setIsLoading,
    setShowTransaction,
    showTransaction
  } = useFramesStore();

  useEffect(() => {
    setFrameData(frame);
  }, [frame, setFrameData]);

  if (!frameData) {
    return null;
  }

  const {
    buttons,
    frameUrl,
    image,
    imageAspectRatio,
    inputText: inputTextLabel,
    postUrl,
    state
  } = frameData;

  const postFrameData = async (index: number, action: string) => {
    try {
      setIsLoading(true);
      const { data }: { data: { frame: IFrame } } = await axios.post(
        `${LCM_API_URL}/frames/post`,
        {
          acceptsAnonymous: frame.acceptsAnonymous,
          acceptsLens: frame.acceptsLens,
          buttonAction: action,
          buttonIndex: index + 1,
          inputText: action === "post" ? inputText : undefined,
          postUrl: buttons[index].target || buttons[index].postUrl || postUrl,
          pubId: publicationId,
          state
        },
        { headers: getAuthApiHeadersWithAccessToken() }
      );

      if (!data.frame) {
        return toast.error(Errors.SomethingWentWrongWithFrame);
      }

      if (action === "post_redirect") {
        if (typeof window !== "undefined" && Boolean(data.frame.location)) {
          const message = `You are about to be redirected to ${data.frame.location!.toString()}`;

          if (window.confirm(message)) {
            window.open(data.frame.location, "_blank")?.focus();
          }
        } else {
          return toast.error(Errors.SomethingWentWrongWithFrame);
        }
      } else if (action === "post") {
        setFrameData(data.frame);
      } else if (action === "tx") {
        const txnData = data.frame.transaction;
        if (!txnData) {
          return toast.error(Errors.SomethingWentWrongWithFrame);
        }

        setShowTransaction({
          frame: frameData,
          index,
          show: true,
          transaction: txnData
        });
      }
    } catch {
      toast.error(Errors.SomethingWentWrongWithFrame);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-3" forceRounded onClick={stopEventPropagation}>
      <img
        alt={image}
        className={cn(
          isLoading && "animate-shimmer",
          `aspect-[${(imageAspectRatio || "1.91:1").replace(":", "/")}]`,
          "w-full rounded-t-xl object-cover"
        )}
        src={image}
      />
      {inputTextLabel && (
        <div className="mx-5 mt-5">
          <Input
            className="w-full rounded border"
            onChange={(e) => setInputText(e.target.value)}
            placeholder={inputTextLabel}
            type="text"
            value={inputText}
          />
        </div>
      )}
      <div
        className={cn(
          buttons.length === 1 && "grid-cols-1",
          buttons.length === 2 && "grid-cols-2",
          buttons.length === 3 && "grid-cols-3",
          buttons.length === 4 && "grid-cols-2",
          "grid gap-4 p-5 dark:border-gray-700"
        )}
      >
        {buttons.map(({ action, button, target }, index) => (
          <Button
            className="flex items-center justify-center space-x-2"
            disabled={isLoading || !publicationId || !currentProfile}
            icon={
              action === "link" ||
              action === "post_redirect" ||
              action === "mint" ? (
                <LinkIcon className="size-4" />
              ) : action === "tx" ? (
                <BoltIcon className="size-4" />
              ) : null
            }
            key={index}
            onClick={() => {
              console.log(PUBLICATION.CLICK_FRAME_BUTTON, {
                action,
                publication_id: publicationId
              });

              if (action === "link" || action === "mint") {
                const url = action === "mint" ? frameUrl : target || frameUrl;
                window.open(url, "_blank");
              } else if (
                action === "post" ||
                action === "tx" ||
                action === "post_redirect"
              ) {
                postFrameData(index, action);
              }
            }}
            outline
            size="lg"
            type={
              action === "post" || action === "post_redirect"
                ? "submit"
                : "button"
            }
          >
            <span>{button}</span>
          </Button>
        ))}
      </div>
      {showTransaction.show && (
        <Modal
          onClose={() =>
            setShowTransaction({
              frame: null,
              index: 0,
              show: false,
              transaction: null
            })
          }
          show={showTransaction.show}
          title="Transaction"
        >
          <Transaction publicationId={publicationId} />
        </Modal>
      )}
    </Card>
  );
};

export default Frame;
