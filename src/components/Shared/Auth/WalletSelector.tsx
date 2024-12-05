import {KeyIcon} from "@heroicons/react/24/outline";
import {XCircleIcon} from "@heroicons/react/24/solid";
import {AUTH} from "@lcm/data/tracking";
import getWalletDetails from "@lcm/helpers/getWalletDetails";
import cn from "@lcm/ui/cn";
import {type FC, useState} from "react";
import type {Connector} from "wagmi";
import {useAccount, useConnect, useDisconnect} from "wagmi";

const WalletSelector: FC = () => {
    const {connectAsync, connect, connectors, error, isPending} = useConnect();
    const {disconnect} = useDisconnect();
    const {connector: activeConnector} = useAccount();

    const [errNanual, setErrNanual] = useState("");

    const onConnect = async (connector: Connector) => {
        setErrNanual("");
        try {

            await connectAsync({connector});

            console.log(AUTH.CONNECT_WALLET, {
                wallet: connector.name.toLowerCase()
            });
        } catch (e) {
            console.trace(e);
        }
    };

    return activeConnector?.id ? (
        <div className="space-y-2.5">
            <button
                className="flex items-center space-x-1 text-sm underline"
                onClick={() => {
                    disconnect?.();
                    console.log(AUTH.CHANGE_WALLET);
                }}
                type="reset"
            >
                <KeyIcon className="size-4"/>
                <div>更换钱包</div>
            </button>
        </div>
    ) : (
        <div className="inline-block w-full space-y-3 overflow-hidden text-left align-middle">
            {connectors
                .filter(
                    (connector: any, index: number, self: any) =>
                        self.findIndex((c: any) => c.type === connector.type) === index
                )
                .map((connector: any) => {
                    return (
                        <button
                            className={cn(
                                {
                                    "hover:bg-gray-100 dark:hover:bg-gray-700":
                                        connector.id !== activeConnector?.id
                                },
                                "flex w-full items-center justify-between space-x-2.5 overflow-hidden rounded-xl border px-4 py-3 outline-none dark:border-gray-700"
                            )}
                            disabled={connector.id === activeConnector?.id || isPending}
                            key={connector.id}
                            onClick={() => onConnect(connector)}
                            type="button"
                        >
              <span>
                {connector.id === "injected"
                    ? "浏览器钱包"
                    : getWalletDetails(connector.name).name}
              </span>
                            <img
                                alt={connector.id}
                                className="size-6"
                                draggable={false}
                                height={24}
                                src={getWalletDetails(connector.name).logo}
                                width={24}
                            />
                        </button>
                    );
                })}

            {error?.message ? (
                <div className="flex items-center space-x-1 text-red-500">
                    <XCircleIcon className="size-5"/>
                    <div>{error?.message || "Failed to connect"}</div>
                </div>
            ) : null}
            {errNanual ? (
                <div className="flex items-center space-x-1 text-red-500">
                    <XCircleIcon className="size-5"/>
                    <div>{errNanual || "Failed to connect"}</div>
                </div>
            ) : null}
        </div>
    );
};

export default WalletSelector;
