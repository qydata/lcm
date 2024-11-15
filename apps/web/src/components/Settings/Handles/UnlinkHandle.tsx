import type {FC} from "react";
import {useState} from "react";

import IndexStatus from "@components/Shared/IndexStatus";
import errorToast from "@helpers/errorToast";
import {MinusCircleIcon} from "@heroicons/react/24/outline";
import {TokenHandleRegistry} from "@hey/abis";
import {TOKEN_HANDLE_REGISTRY} from "@hey/data/constants";
import {Errors} from "@hey/data/errors";
import {SETTINGS} from "@hey/data/tracking";
import {Button, Spinner} from "@hey/ui";
import toast from "react-hot-toast";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useWriteContract} from "wagmi";

const UnlinkHandle: FC = () => {
    const {currentProfile} = useProfileStore();
    const {isSuspended} = useProfileStatus();
    const [unlinking, setUnlinking] = useState<boolean>(false);

    const onCompleted = (
        __typename?: "LensProfileManagerRelayError" | "RelayError" | "RelaySuccess"
    ) => {
        if (
            __typename === "RelayError" ||
            __typename === "LensProfileManagerRelayError"
        ) {
            return;
        }

        setUnlinking(false);
        toast.success("Handle unlinked successfully!");
        console.log(SETTINGS.HANDLE.UNLINK);
    };

    const onError = (error: any) => {
        setUnlinking(false);
        errorToast(error);
    };

    const {data: writeHash, writeContractAsync} = useWriteContract({
        mutation: {onError, onSuccess: () => onCompleted()}
    });

    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: TokenHandleRegistry,
            address: TOKEN_HANDLE_REGISTRY,
            args,
            functionName: "unlink"
        });
    };

    const unlink = async () => {
        if (!currentProfile) {
            return;
        }

        if (isSuspended) {
            return toast.error(Errors.Suspended);
        }

        try {
            setUnlinking(true);

        } catch (error) {
            onError(error);
        }
    };

    return (
        <div className="m-5">
            {writeHash ? (
                <div className="mt-2">
                    <IndexStatus
                        reload
                        txHash={writeHash}
                    />
                </div>
            ) : (
                <Button
                    disabled={unlinking}
                    icon={
                        unlinking ? (
                            <Spinner size="xs"/>
                        ) : (
                            <MinusCircleIcon className="size-4"/>
                        )
                    }
                    onClick={unlink}
                    outline
                >
                    取消身份标识
                </Button>
            )}
        </div>
    );
};

export default UnlinkHandle;
