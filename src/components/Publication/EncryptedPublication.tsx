import { type FC, useEffect, useState } from "react";

import { GatedClient } from "@components/Common/gated/GatedClient";
import Attachments from "@components/Shared/Attachments";
import Markup from "@components/Shared/Markup";
import { webCryptoProvider } from "@components/webCryptoProvider";
import errorToast from "@helpers/errorToast";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import getPublicationData from "@lcm/helpers/getPublicationData";
import { Spinner } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { isIOS, isMobile } from "react-device-detect";
import { toast } from "react-hot-toast";
import { useAccount, useSignMessage } from "wagmi";
import { hydrateAuthSky } from "../../store/persisted/useAuthStore";

const EncryptedPublication: FC = ({
  metadata,
  publication,
  contentClassName = "",
  showMore = false
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const targetPublication = publication;

  const [showAttachments, setShowAttachments] = useState(false);
  const onError = (error?: any) => {
    console.trace(error);
    setIsLoading(false);
    errorToast(error);
  };
  const { address, connector: activeConnector } = useAccount();
  const { signMessageAsync } = useSignMessage({ mutation: { onError } });

  const [content, setContent] = useState("");
  const [cClient, setCClient] = useState<GatedClient>();

  const [filteredAsset, setFilteredAsset] = useState(null);
  const [filteredAttachments, setFilteredAttachments] = useState([]);

  const [isDesc, setIsDesc] = useState(false);
  const [canShowMore, setCanShowMore] = useState(false);
  useEffect(() => {
    const signer = {
      getAddress: () => {
        return address;
      },
      signMessage: (message: any) => {
        return signMessageAsync({
          message: message
        }) as Promise<string>;
      }
    };

    const cClient = new GatedClient({
      signer: signer,
      encryptionProvider: webCryptoProvider()
    });
    setCClient(cClient);
    // 开始解密加密数据
  }, []);

  useEffect(() => {
    if (cClient) {
      decContext();
    }
  }, [cClient]);

  const decContext = () => {
    switch (metadata.mainContentFocus) {
      case "TextOnlyMetadataV3":
      case "TEXT_ONLY":
      case "IMAGE":
      case "VIDEO":
      case "AUDIO":
        const sKey = hydrateAuthSky();
        if (!sKey.authSign || !sKey.profile) {
          setIsLoading(false);
          toast.error("当前状态无法查看");
          break;
        }
        // TODO: Implement text only metadata
        cClient
          .decryptPublicationMetadataFragment(metadata, publication, address)
          .then((result) => {
            if (result.isSuccess()) {
              setIsDesc(true);
              const _filteredAsset = getPublicationData(result.value)?.asset;
              const _filteredAttachments =
                getPublicationData(result.value)?.attachments || [];
              setFilteredAsset(_filteredAsset);
              setFilteredAttachments(_filteredAttachments);
              const _showAttachments =
                _filteredAttachments.length > 0 || _filteredAsset;
              setShowAttachments(_showAttachments);

              const filteredContent = result.value.content || "";
              const canShowMore = filteredContent?.length > 450 && showMore;
              let content = filteredContent;

              if (isIOS && isMobile && canShowMore) {
                const truncatedContent = content?.split("\n")?.[0];
                if (truncatedContent) {
                  content = truncatedContent;
                }
              }
              setContent(content);
              setCanShowMore(canShowMore);
            }
          });
        break;
      default:
        console.log("Unsupported metadata type", metadata.mainContentFocus);
    }
  };
  return (
    <div className="break-words">
      <LockClosedIcon className="mb-2 size-4 text-gray-500" />

      {!isDesc ? (
        <Spinner size="sm" />
      ) : (
        <Markup
          className={cn(
            { "line-clamp-5": canShowMore },
            "markup linkify break-words text-md",
            contentClassName
          )}
          mentions={targetPublication.profilesMentioned}
        >
          {content}
        </Markup>
      )}

      {showAttachments ? (
        <Attachments asset={filteredAsset} attachments={filteredAttachments} />
      ) : null}
    </div>
  );
};

export default EncryptedPublication;
