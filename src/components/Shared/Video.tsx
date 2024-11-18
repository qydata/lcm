import type { FC } from "react";
import { memo } from "react";

import {
  IPFS_GATEWAY,
  IPFS_PROTOL,
  VIDEO_THUMBNAIL
} from "@lcm/data/constants";
import imageKit from "@lcm/helpers/imageKit";
import sanitizeDStorageUrl from "@lcm/helpers/sanitizeDStorageUrl";
import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import cn from "@lcm/ui/cn";
import { Player } from "@livepeer/react";
import { useProfileStore } from "src/store/persisted/useProfileStore";

interface VideoProps {
  className?: string;
  poster?: string;
  src: string;
}

const Video: FC<VideoProps> = ({ className = "", poster, src }) => {
  const { currentProfile } = useProfileStore();

  const sanitizedPoster = poster
    ? imageKit(sanitizeDStorageUrl(poster), VIDEO_THUMBNAIL)
    : undefined;

  let _sanitizedPoster = sanitizedPoster;
  if (_sanitizedPoster?.startsWith("https://")) {
    _sanitizedPoster = _sanitizedPoster?.replace(IPFS_PROTOL, "ipfs/");
  } else {
    _sanitizedPoster = _sanitizedPoster?.replace(IPFS_PROTOL, IPFS_GATEWAY);
  }

  return (
    <div className={cn("lp-player", className)} onClick={stopEventPropagation}>
      <Player
        autoUrlUpload={{
          fallback: true,
          ipfsGateway: IPFS_GATEWAY
        }}
        // autoPlay={true}
        controls={{ defaultVolume: 1 }}
        objectFit="contain"
        poster={_sanitizedPoster}
        showLoadingSpinner
        showPipButton={false}
        showUploadingIndicator
        src={src}
        viewerId={currentProfile?.ownedBy}
      />
    </div>
  );
};

export default memo(Video);
