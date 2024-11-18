import { SETTINGS } from "@lcm/data/tracking";
import downloadJson from "@lcm/helpers/downloadJson";
import type { Profile as TProfile } from "@lcm/lens";
import { useProfileLazyQuery } from "@lcm/lens";
import { Button, Card, CardHeader } from "@lcm/ui";
import type { FC } from "react";
import { useState } from "react";
import { useProfileStore } from "src/store/persisted/useProfileStore";

const Profile: FC = () => {
  const { currentProfile } = useProfileStore();
  const [profile, setProfile] = useState<null | TProfile>(null);
  const [exporting, setExporting] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const [exportProfile] = useProfileLazyQuery({
    fetchPolicy: "no-cache",
    returnPartialData: true,
    variables: {
      fullHandle: currentProfile?.handle.fullHandle
    }
  });

  const handleExportClick = () => {
    console.log(SETTINGS.EXPORT.PROFILE);
    setExporting(true);
    exportProfile({
      onCompleted: (data) => {
        setProfile(data.profiles[0] as TProfile);
        setFetchCompleted(true);
        setExporting(false);
      }
    });
  };

  const download = () => {
    downloadJson(profile, "profile", () => {
      setProfile(null);
      setFetchCompleted(false);
    });
  };

  return (
    <Card>
      <CardHeader
        body="将所有个人资料数据导出到 JSON 文件。"
        title="导出个人资料"
      />
      <div className="m-5">
        {fetchCompleted ? (
          <Button onClick={download} outline>
            下载个人资料
          </Button>
        ) : (
          <Button disabled={exporting} onClick={handleExportClick} outline>
            {exporting ? "正在导出..." : "立即导出"}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Profile;
