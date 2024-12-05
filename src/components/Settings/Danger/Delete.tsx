import type { Profile } from "@lcm/lens";
import type { FC } from "react";

import UserProfile from "@components/Shared/UserProfile";
import errorToast from "@helpers/errorToast";

import {
  ExclamationTriangleIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import { LensHub } from "@lcm/abis";
import { APP_NAME, LENS_HUB } from "@lcm/data/constants";
import { Errors } from "@lcm/data/errors";
import { SETTINGS } from "@lcm/data/tracking";
import {
  Button,
  Card,
  CardHeader,
  H5,
  Modal,
  Spinner,
  WarningMessage
} from "@lcm/ui";
import { useState } from "react";
import toast from "react-hot-toast";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { signOut } from "src/store/persisted/useAuthStore";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useDisconnect, useWriteContract } from "wagmi";

const DeleteSettings: FC = () => {
  const { currentProfile } = useProfileStore();
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { disconnect } = useDisconnect();
  const handleWrongNetwork = useHandleWrongNetwork();

  const onCompleted = () => {
    console.log(SETTINGS.DANGER.DELETE_PROFILE);
    console.log('onCompleted lagout 40')
    signOut();
    disconnect?.();
    location.href = "/";
  };

  const onError = (error: any) => {
    setIsLoading(false);
    errorToast(error);
  };

  const { writeContractAsync } = useWriteContract({
    mutation: { onSuccess: onCompleted }
  });

  const write = async ({ args }: { args: any[] }) => {
    return await writeContractAsync({
      abi: LensHub,
      address: LENS_HUB,
      args,
      functionName: "burn"
    });
  };

  const handleDelete = async () => {
    if (!currentProfile) {
      return toast.error(Errors.SignWallet);
    }

    try {
      setIsLoading(true);
      await handleWrongNetwork();
      return await write({ args: [currentProfile?.id] });
    } catch (error) {
      onError(error);
    }
  };

  const cooldownEnded = () => {
    const cooldownDate = currentProfile?.guardian?.cooldownEndsOn as any;
    return new Date(cooldownDate).getTime() < Date.now();
  };

  const canDelete = !currentProfile?.guardian?.protected && cooldownEnded();

  if (!canDelete) {
    return (
      <Card>
        <CardHeader
          body="启用配置文件监护人后，无法删除您的配置文件。"
          hideDivider
          title={<div className="text-red-500">删除Lens个人资料</div>}
        />
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        body={`This will permanently delete your Profile NFT on the Lens Protocol. You will not be able to use any apps built on Lens, including ${APP_NAME}. All your data will be wiped out immediately and you won't be able to get it back.`}
        title={<div className="text-red-500">删除Lens个人资料</div>}
      />
      <div className="m-5 space-y-5">
        <UserProfile
          hideFollowButton
          hideUnfollowButton
          profile={currentProfile as Profile}
        />
        <div className="space-y-3">
          <H5 className="text-red-500">Delete Lens profile</H5>
          <p>
            这将永久删除您在 Lens 协议上的个人资料 NFT。 您将无法使用基于 Lens
            构建的任何应用程序，包括 {APP_NAME}{" "}
            中。您的所有数据将立即被清除，而您 将无法取回。
          </p>
        </div>
        <H5>您还应该了解这些</H5>
        <div className="ld-text-gray-500 divide-y text-sm dark:divide-gray-700">
          <p className="pb-3">
            如果 Lens 个人资料是意外的，则无法恢复它，或者 错误删除。
          </p>
          <p className="py-3">
            某些帐户信息可能仍可在搜索引擎中使用， 例如 Google 或 Bing。
          </p>
          <p className="py-3">删除 @handle 后，您的将立即释放 帐户。</p>
        </div>
        <Button
          disabled={isLoading}
          icon={
            isLoading ? (
              <Spinner size="xs" variant="danger" />
            ) : (
              <TrashIcon className="size-5" />
            )
          }
          onClick={() => setShowWarningModal(true)}
          variant="danger"
        >
          {isLoading ? "删除中..." : "删除您的帐户"}
        </Button>
      </div>
      <Modal
        icon={<ExclamationTriangleIcon className="size-5" />}
        onClose={() => setShowWarningModal(false)}
        show={showWarningModal}
        title="危险区域"
      >
        <div className="space-y-3 p-5">
          <WarningMessage
            message={
              <div className="leading-6">
                确认您已阅读所有后果并希望删除 无论如何，您的帐户
              </div>
            }
            title="Are you sure?"
          />
          <Button
            icon={<TrashIcon className="size-5" />}
            onClick={async () => {
              setShowWarningModal(false);
              await handleDelete();
            }}
            variant="danger"
          >
            是的，删除我的帐户
          </Button>
        </div>
      </Modal>
    </Card>
  );
};

export default DeleteSettings;
