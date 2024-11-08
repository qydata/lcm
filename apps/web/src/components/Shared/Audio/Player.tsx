import type {APITypes} from "plyr-react";
import Plyr from "plyr-react";
import type {FC, Ref} from "react";
import {memo} from "react";
import "plyr-react/plyr.css";
import {IPFS_GATEWAY, IPFS_PROTOL} from "@hey/data/constants";

interface PlayerProps {
    playerRef: Ref<APITypes>;
    src: string;
}

const Player: FC<PlayerProps> = ({playerRef, src}) => {
    let psrc = src.replace(IPFS_PROTOL, IPFS_GATEWAY)
    return (
        <Plyr
            options={{
                controls: ["progress", "current-time", "mute", "volume"]
            }}
            ref={playerRef}
            source={{sources: [{src: psrc}], type: "audio"}}
        />
    );
};

export default memo(Player);
