import type { IGif } from "@lcm/types/giphy";
import type { FC } from "react";

import { GifIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { PUBLICATION } from "@lcm/data/tracking";
import { Modal, Tooltip } from "@lcm/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePublicationAttachmentStore } from "src/store/non-persisted/publication/usePublicationAttachmentStore";

import GifSelector from "./GifSelector";

interface GiphyProps {
  setGifAttachment: (gif: IGif) => void;
}

const Gif: FC<GiphyProps> = ({ setGifAttachment }) => {
  const { attachments } = usePublicationAttachmentStore((state) => state);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Tooltip content="GIF" placement="top">
        <motion.button
          aria-label="GIF"
          className="rounded-full outline-offset-8"
          disabled={attachments.length >= 4}
          onClick={() => {
            setShowModal(!showModal);
            console.log(PUBLICATION.OPEN_GIFS);
          }}
          type="button"
          whileTap={{ scale: 0.9 }}
        >
          <GifIcon className="size-5" />
        </motion.button>
      </Tooltip>
      <Modal
        icon={<PhotoIcon className="size-5" />}
        onClose={() => setShowModal(false)}
        show={showModal}
        title="选择 GIF"
      >
        <GifSelector
          setGifAttachment={setGifAttachment}
          setShowModal={setShowModal}
        />
      </Modal>
    </>
  );
};

export default Gif;
