import type {NextPage} from "next";

import MetaTags from "@components/Common/MetaTags";
import NotLoggedIn from "@components/Shared/NotLoggedIn";
import Slug from "@components/Shared/Slug";
import {APP_NAME} from "@hey/data/constants";
import {PAGEVIEW} from "@hey/data/tracking";
import {Card, CardHeader, GridItemEight, GridItemFour, GridLayout} from "@hey/ui";
import {useEffect} from "react";
import {useProfileStore} from "src/store/persisted/useProfileStore";

import SettingsSidebar from "../Sidebar";
import LinkHandle from "./LinkHandle";
import UnlinkHandle from "./UnlinkHandle";

const HandlesSettings: NextPage = () => {
    const {currentProfile} = useProfileStore();

    useEffect(() => {
        console.log(PAGEVIEW, {page: "settings", subpage: "handles"});
    }, []);

    if (!currentProfile) {
        return <NotLoggedIn/>;
    }

    return (
        <GridLayout>
            <MetaTags title={`Handles settings • ${APP_NAME}`}/>
            <GridItemFour>
                <SettingsSidebar/>
            </GridItemFour>
            <GridItemEight className="space-y-5">
                {currentProfile.handle ? (
                    <Card>
                        <CardHeader
                            body="取消关联您的用户名会将其从您的个人资料中删除，确保它
              不再公开显示或与您的个人资料关联。"
                            title={
                                <span>
                  取消链接 <Slug slug={currentProfile.handle?.fullHandle}/> 从
                  您的个人资料
                </span>
                            }
                        />
                        <UnlinkHandle/>
                    </Card>
                ) : (<></>)}
                <Card>
                    <CardHeader
                        body="将您的用户名链接到您的个人资料会公开展示它，
            允许其他人根据
            您的唯一在线身份。"
                        title="链接用户名链接"
                    />
                    <LinkHandle/>
                </Card>
            </GridItemEight>
        </GridLayout>
    );
};

export default HandlesSettings;
