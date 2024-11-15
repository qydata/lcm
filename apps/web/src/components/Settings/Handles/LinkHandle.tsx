import {useOwnedHandlesQuery} from "@hey/lens";
import type {FC} from "react";
import {useState} from "react";

import IndexStatus from "@components/Shared/IndexStatus";
import LazySmallUserProfile from "@components/Shared/LazySmallUserProfile";
import Loader from "@components/Shared/Loader";
import Slug from "@components/Shared/Slug";
import errorToast from "@helpers/errorToast";
import {AtSymbolIcon, MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {TokenHandleRegistry} from "@hey/abis";
import {TOKEN_HANDLE_REGISTRY} from "@hey/data/constants";
import {Errors} from "@hey/data/errors";
import {SETTINGS} from "@hey/data/tracking";
import {Button, EmptyState, Spinner} from "@hey/ui";
import toast from "react-hot-toast";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useSignTypedData, useWriteContract} from "wagmi";

const LinkHandle: FC = () => {
    const {currentProfile} = useProfileStore();
    const {isSuspended} = useProfileStatus();
    const [linkingHandle, setLinkingHandle] = useState<null | string>(null);

    const onCompleted = (
        __typename?: "LensProfileManagerRelayError" | "RelayError" | "RelaySuccess"
    ) => {
        if (
            __typename === "RelayError" ||
            __typename === "LensProfileManagerRelayError"
        ) {
            return;
        }

        setLinkingHandle(null);
        toast.success("Handle linked successfully!");
        console.log(SETTINGS.HANDLE.LINK);
    };

    const onError = (error: any) => {
        setLinkingHandle(null);
        errorToast(error);
    };

    const {data, loading} = useOwnedHandlesQuery({
        variables: {for: currentProfile?.ownedBy}
    });

    const {signTypedDataAsync} = useSignTypedData({mutation: {onError}});
    const {data: writeHash, writeContractAsync} = useWriteContract({
        mutation: {onError, onSuccess: () => onCompleted()}
    });

    const write = async ({args}: { args: any[] }) => {
        return await writeContractAsync({
            abi: TokenHandleRegistry,
            address: TOKEN_HANDLE_REGISTRY,
            args,
            functionName: "link"
        });
    };

    const link = async (handle: string) => {
        if (!currentProfile) {
            return;
        }

        if (isSuspended) {
            return toast.error(Errors.Suspended);
        }

        const confirmation = confirm("Are you sure you want to link this handle?");

        if (!confirmation) {
            return;
        }

        try {
            setLinkingHandle(handle);

        } catch (error) {
            onError(error);
        }
    };

    if (loading) {
        return <Loader className="py-10"/>;
    }

    const ownedHandles = data?.ownedHandles.items.filter(
        (handle) => handle.linkedTo?.nftTokenId !== currentProfile?.id
    );

    if (!ownedHandles?.length) {
        return (
            <EmptyState
                hideCard
                icon={<AtSymbolIcon className="size-8"/>}
                message="No handles found to link!"
            />
        );
    }

    return (
        <div className="m-5 space-y-6">
            {ownedHandles?.map((handle) => (
                <div
                    className="flex flex-wrap items-center justify-between gap-3"
                    key={handle.fullHandle}
                >
                    <div className="flex items-center space-x-2">
                        <Slug className="font-bold" slug={handle.fullHandle}/>
                        {handle.linkedTo ? (
                            <div className="flex items-center space-x-2">
                                <span>·</span>
                                <div>Linked to</div>
                                <LazySmallUserProfile id={handle.linkedTo?.nftTokenId}/>
                            </div>
                        ) : null}
                    </div>
                    {writeHash ? (
                        <div className="mt-2">
                            <IndexStatus
                                reload
                                txHash={writeHash}
                            />
                        </div>
                    ) : (
                        <Button
                            disabled={linkingHandle === handle.fullHandle}
                            icon={
                                linkingHandle === handle.fullHandle ? (
                                    <Spinner size="xs"/>
                                ) : handle.linkedTo ? (
                                    <MinusCircleIcon className="size-4"/>
                                ) : (
                                    <PlusCircleIcon className="size-4"/>
                                )
                            }
                            onClick={() => link(handle.fullHandle)}
                            outline
                        >
                            {handle.linkedTo ? "Unlink and Link" : "Link"}
                        </Button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LinkHandle;
