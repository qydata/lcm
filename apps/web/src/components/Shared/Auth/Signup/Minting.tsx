import type {FC} from "react";

import {useProfileQuery} from "@hey/lens";
import {H4, Spinner} from "@hey/ui";

import {useSignupStore} from ".";

const Minting: FC = () => {
    const {choosedHandle, setNewProfile, setScreen, transactionHash} =
        useSignupStore();

    useProfileQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache', // 强制从网络获取数据
        returnPartialData: true,
        onCompleted: (data) => {
            if (data.profiles && data.profiles.length > 0) {
                setNewProfile(data.profiles[0]);
                setScreen("success");
            }
        },
        pollInterval: 3000,
        variables: {fullHandle: choosedHandle}
    });

    return (
        <div className="m-8 flex flex-col items-center justify-center">
            <H4>我们正在准备您的个人资料！</H4>
            <div className="ld-text-gray-500 mt-3 text-center font-semibold">
                这将需要几秒钟到几分钟的时间。请耐心等待。
            </div>
            <Spinner className="mt-8"/>
        </div>
    );
};

export default Minting;
