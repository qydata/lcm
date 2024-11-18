import type { FC } from "react";

import { APP_NAME } from "@lcm/data/constants";
import checkDispatcherPermissions from "@lcm/helpers/checkDispatcherPermissions";
import { Card, CardHeader } from "@lcm/ui";
import { useProfileStore } from "src/store/persisted/useProfileStore";

import ToggleLensManager from "./ToggleLensManager";

const LensManager: FC = () => {
  const { currentProfile } = useProfileStore();
  const { canUseSignless } = checkDispatcherPermissions(currentProfile);

  return (
    <Card>
      <CardHeader
        body={`您可以启用 Lens Manager 与 ${APP_NAME} 交互，而无需
        签署您的任何交易。`}
        title={canUseSignless ? "禁用无签名事务" : "无签名事务"}
      />
      <div className="m-5">
        <ToggleLensManager />
      </div>
    </Card>
  );
};

export default LensManager;
