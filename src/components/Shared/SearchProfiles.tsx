import type { Profile } from "@lcm/lens";
import { useSearchProfilesLazyQuery } from "@lcm/lens";
import { Card, Input } from "@lcm/ui";
import type { ChangeEvent, FC } from "react";
import { useCallback, useState } from "react";
import { isAddress } from "viem";
import Loader from "./Loader";
import SmallUserProfile from "./SmallUserProfile";

interface SearchProfilesProps {
  error?: boolean;
  hideDropdown?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onProfileSelected: (profile: Profile) => void;
  placeholder?: string;
  skipGardeners?: boolean;
  value: string;
}

const SearchProfiles: FC<SearchProfilesProps> = ({
  error = false,
  hideDropdown = false,
  onChange,
  onProfileSelected,
  placeholder = "输入草田链地址进行搜索…",
  skipGardeners = false,
  value
}) => {
  const [searchUsers, { data, loading, error: queryError }] =
    useSearchProfilesLazyQuery({
      fetchPolicy: "no-cache", // 强制从网络获取数据
      returnPartialData: true,
      onCompleted: (someData) => {
        console.log("someData", someData);
        /* do your staff */
      }
    });
  const [searchTerm, setSearchTerm] = useState(value);

  // 防抖函数：避免频繁的搜索请求
  const debouncedSearch = useCallback((keyword: string) => {
    if (keyword.trim()) {
      const request = {
        limit: 10,
        ownedBy: keyword
      };
      searchUsers({ variables: request });
    }
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;

    setSearchTerm(keyword);
    onChange(event);
    if (isAddress(keyword)) {
      debouncedSearch(keyword);
    } else {
    }
  };
  const profiles = (data?.profiles as Profile[]) || [];

  return (
    <div className="relative w-full">
      <Input
        error={error}
        onChange={handleSearch}
        placeholder={placeholder}
        type="text"
        value={searchTerm}
      />
      {!hideDropdown && searchTerm.length > 0 && (
        <div className="absolute mt-2 flex w-[94%] max-w-md flex-col">
          <Card className="z-[2] max-h-[80vh] overflow-y-auto py-2">
            {loading ? (
              <Loader className="my-3" message="Searching users" small />
            ) : queryError ? (
              <div className="px-4 py-2 text-red-500">
                查询出错了，请稍后再试
              </div>
            ) : profiles.length > 0 ? (
              profiles.slice(0, 7).map((profile) => (
                <div
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  key={profile?.id}
                  onClick={() => onProfileSelected(profile)}
                >
                  <SmallUserProfile profile={profile} />
                </div>
              ))
            ) : (
              <div className="px-4 py-2">没有匹配的用户</div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default SearchProfiles;
