import type {FC, ReactNode} from "react";
import {useEffect} from "react";

import FullPageLoader from "@components/Shared/FullPageLoader";
import GlobalAlerts from "@components/Shared/GlobalAlerts";
import GlobalBanners from "@components/Shared/GlobalBanners";
import BottomNavigation from "@components/Shared/Navbar/BottomNavigation";
import PageMetatags from "@components/Shared/PageMetatags";
import getToastOptions from "@helpers/getToastOptions";
import {useIsClient} from "@uidotdev/usehooks";
import {useTheme} from "next-themes";
import {Toaster} from "react-hot-toast";
import {useNonceStore} from "src/store/non-persisted/useNonceStore";
import {usePreferencesStore} from "src/store/non-persisted/usePreferencesStore";
import {useProfileStatus} from "src/store/non-persisted/useProfileStatus";
import {hydrateAuthSky, signOut} from "src/store/persisted/useAuthStore";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {useAccount, useConnect, useDisconnect} from "wagmi";

import GlobalModals from "../Shared/GlobalModals";
import Navbar from "../Shared/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    const {address} = useAccount();
    const {resolvedTheme} = useTheme();
    const {currentProfile, setCurrentProfile, setFallbackToCuratedFeed} =
        useProfileStore();
    const {resetPreferences} = usePreferencesStore();
    const {resetStatus} = useProfileStatus();
    const {setLensHubOnchainSigNonce} = useNonceStore();
    const isMounted = useIsClient();
    const {disconnect} = useDisconnect();
    const {connectAsync, connect, connectors, error, isPending} = useConnect();

    const logout = (reload = false) => {
        resetPreferences();
        resetStatus();
        signOut();
        setCurrentProfile(null);
        disconnect?.();
        if (reload) {
            location.reload();
        }
    };
    useEffect(() => {
        if (!address) {
            console.log('no address lagout 50')
            if (!(window.self !== window.top)) {
                // We are not in an iframe...bail
                logout();
            } else {
                // 使用第一个连接器重新连接
                if (window.ethereum.isCtWallet) {
                    connect({connector: connectors[0]});
                }
            }
        }
    }, [address]);
    const validateAuthentication = () => {
        const {profile} = hydrateAuthSky();
        if (!profile) {
            console.log('no profile lagout 57')
            logout();
        } else {
            setCurrentProfile(profile);
            // setLensHubOnchainSigNonce(userSigNonces.lensHubOnchainSigNonce);

            // If the user has no following, we should fallback to the curated feed
            // 暂时不索引关注者
            setFallbackToCuratedFeed(true);
        }
    };

    useEffect(() => {
        validateAuthentication();
    }, []);

    if (!isMounted) {
        return <FullPageLoader/>;
    }
    return (
        <>
            <PageMetatags/>
            <Toaster
                containerStyle={{wordBreak: "break-word"}}
                position="bottom-right"
                toastOptions={getToastOptions(resolvedTheme)}
            />
            <GlobalModals/>
            <GlobalAlerts/>
            <div className="flex min-h-screen flex-col pb-14 md:pb-0">
                <Navbar/>
                <GlobalBanners/>
                <BottomNavigation/>
                {children}
            </div>
        </>
    );
};

export default Layout;
