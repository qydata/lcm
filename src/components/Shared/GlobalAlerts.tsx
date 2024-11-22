import type {FC} from "react";
import {useState} from "react";
import {Alert} from "@lcm/ui";
import {useGlobalAlertStateStore} from "src/store/non-persisted/useGlobalAlertStateStore";

import BlockOrUnBlockProfile from "./Alert/BlockOrUnBlockProfile";

const GlobalAlerts: FC = () => {

    const {
        blockingorUnblockingProfile,
        showBlockOrUnblockAlert
    } = useGlobalAlertStateStore();
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            {blockingorUnblockingProfile && <BlockOrUnBlockProfile/>}
            {false && (
                <Alert
                    confirmText={"Block"}
                    description={`Are you sure you want to block?`}
                    isDestructive
                    isPerformingAction={isLoading}
                    show={showBlockOrUnblockAlert}
                    title="Block Profile"
                    onClose={() => {
                        console.log(1)
                    }}/>
            )}
        </>
    );
};

export default GlobalAlerts;
