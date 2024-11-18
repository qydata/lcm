import { SETTINGS } from "@lcm/data/tracking";
import downloadJson from "@lcm/helpers/downloadJson";
import { usePublicationsLazyQuery } from "@lcm/lens";
import { Button, Card, CardHeader } from "@lcm/ui";
import type { FC } from "react";
import { useState } from "react";
import { useProfileStore } from "src/store/persisted/useProfileStore";

const Publications: FC = () => {
  const { currentProfile } = useProfileStore();
  const [publications, setPublications] = useState<any[]>([]);
  const [exporting, setExporting] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const request: { mainContentFocus: string[]; from: any; first: number } = {
    first: 1000,
    from: currentProfile?.id,
    mainContentFocus: ["IMAGE", "ARTICLE", "VIDEO", "TEXT_ONLY", "AUDIO"]
  };

  const [exportPublications] = usePublicationsLazyQuery({
    fetchPolicy: "no-cache", // 强制从网络获取数据
    returnPartialData: true
  });

  const handleExportClick = async () => {
    console.log(SETTINGS.EXPORT.PUBLICATIONS);
    setExporting(true);
    const fetchPublications = async (skip?: number) => {
      const { data } = await exportPublications({
        onCompleted: (data) => {
          setPublications((prev) => {
            const newPublications = data.posts.filter((newPublication) => {
              return !prev.some(
                (publication) => publication.id === newPublication.id
              );
            });

            return [...prev, ...newPublications];
          });
        },
        // TODO 这里还有问题
        variables: { ...request, skip }
      });

      if (data?.posts.length === 0 || data?.posts.length < 1000) {
        setFetchCompleted(true);
        setExporting(false);
      } else {
        await fetchPublications(1000);
      }
    };

    await fetchPublications();
  };

  const download = () => {
    downloadJson(publications, "publications", () => {
      setPublications([]);
      setFetchCompleted(false);
    });
  };

  return (
    <Card>
      <CardHeader body="将您的所有帖子导出到 JSON 文件。" title="导出帖子" />
      <div className="m-5">
        {publications.length > 0 ? (
          <div className="pb-2">
            已导出 <b>{publications.length}</b> 帖子
          </div>
        ) : null}
        {fetchCompleted ? (
          <Button onClick={download} outline>
            下载帖子
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

export default Publications;
