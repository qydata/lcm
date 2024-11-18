import type { NextPage } from "next";

import MetaTags from "@components/Common/MetaTags";
import NotLoggedIn from "@components/Shared/NotLoggedIn";

import { APP_NAME } from "@lcm/data/constants";
import { Localstorage } from "@lcm/data/storage";
import { PAGEVIEW } from "@lcm/data/tracking";
import {
  Button,
  Card,
  CardHeader,
  GridItemEight,
  GridItemFour,
  GridLayout
} from "@lcm/ui";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useProfileStore } from "src/store/persisted/useProfileStore";
import { useTransactionStore } from "src/store/persisted/useTransactionStore";

import SettingsSidebar from "../Sidebar";

const CleanupSettings: NextPage = () => {
  const { currentProfile } = useProfileStore();
  const { reset } = useTransactionStore();

  useEffect(() => {
    console.log(PAGEVIEW, { page: "settings", subpage: "cleanup" });
  }, []);

  if (!currentProfile) {
    return <NotLoggedIn />;
  }

  const cleanup = (key: string) => {
    localStorage.removeItem(key);
    toast.success(`Cleared ${key}`);
  };

  return (
    <GridLayout>
      <MetaTags title={`清理设置 • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsSidebar />
      </GridItemFour>
      <GridItemEight>
        <Card>
          <CardHeader
            body="如果您遇到一些问题，您可以尝试清理浏览器的内部本地存储。这将删除浏览器中存储的所有数据。"
            title="清理设置"
          />
          <div className="m-5 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <b>优化行动</b>
                <div className="ld-text-gray-500 font-bold text-xs">
                  清理您的帖子、评论、关注和其他操作 仍在队列中
                </div>
              </div>
              <Button onClick={reset}>清理</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <b>时间轴设置</b>
                <div className="ld-text-gray-500 font-bold text-xs">
                  清理时间轴过滤器设置
                </div>
              </div>
              <Button onClick={() => cleanup(Localstorage.TimelineStore)}>
                清理
              </Button>
            </div>
          </div>
        </Card>
      </GridItemEight>
    </GridLayout>
  );
};

export default CleanupSettings;
