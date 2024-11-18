import type { Publication } from "@lcm/lens";
import type { OG } from "@lcm/types/misc";
import type { FC } from "react";

import { LCM_API_URL } from "@lcm/data/constants";
import { ALLOWED_HTML_HOSTS } from "@lcm/data/og";
import getFavicon from "@lcm/helpers/getFavicon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

import Embed from "./Embed";
import EmptyOembed from "./EmptyOembed";
import Frame from "./Frames";
import Player from "./Player";

interface OembedProps {
  onLoad?: (og: OG) => void;
  publication?: Publication;
  url: string;
}

const Oembed: FC<OembedProps> = ({ onLoad, publication, url }) => {
  const { data, error, isLoading } = useQuery({
    enabled: Boolean(url),
    queryFn: async () => {
      const response = await axios.get(`${LCM_API_URL}/oembed`, {
        params: { url }
      });
      return response.data.oembed;
    },
    queryKey: ["getOembed", url],
    refetchOnMount: false
  });

  const [currentPublication, setCurrentPublication] = useState<Publication>();

  useEffect(() => {
    if (publication) {
      setCurrentPublication(publication);
    }
  }, [publication]);

  useEffect(() => {
    if (onLoad) {
      onLoad(data as OG);
    }
  }, [data]);

  if (isLoading || error || !data) {
    if (error) {
      return null;
    }

    const hostname = new URL(url).hostname.replace("www.", "");

    if (ALLOWED_HTML_HOSTS.includes(hostname)) {
      return <div className="shimmer mt-4 h-[415px] w-full rounded-xl" />;
    }

    return <EmptyOembed url={url} />;
  }

  const og: OG = {
    description: data?.description,
    favicon: getFavicon(data.url),
    frame: data?.frame,
    html: data?.html,
    image: data?.image,
    nft: data?.nft,
    site: data?.site,
    title: data?.title,
    url: url as string
  };

  if (!og.title && !og.html && !og.frame) {
    return null;
  }

  if (og.html) {
    return <Player og={og} />;
  }

  if (og.frame) {
    return <Frame frame={og.frame} publicationId={currentPublication?.id} />;
  }

  return <Embed og={og} publicationId={currentPublication?.id} />;
};

export default Oembed;
