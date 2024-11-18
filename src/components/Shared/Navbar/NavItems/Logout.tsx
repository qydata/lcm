import type { FC } from "react";
import { useState } from "react";

import errorToast from "@helpers/errorToast";
import getCurrentSession from "@helpers/getCurrentSession";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { AUTH } from "@lcm/data/tracking";
import cn from "@lcm/ui/cn";
import { usePreferencesStore } from "src/store/non-persisted/usePreferencesStore";
import { signOut } from "src/store/persisted/useAuthStore";
import { useDisconnect } from "wagmi";

interface LogoutProps {
  className?: string;
  onClick?: () => void;
}

const Logout: FC<LogoutProps> = ({ className = "", onClick }) => {
  const { resetPreferences } = usePreferencesStore();
  const [revoking, setRevoking] = useState(false);

  const { disconnect } = useDisconnect();
  const { profile } = getCurrentSession();

  const onError = (error: any) => {
    setRevoking(false);
    errorToast(error);
  };

  const logout = async () => {
    try {
      setRevoking(true);
      if (!profile) {
        console.log(AUTH.LOGOUT);
        resetPreferences();
        signOut();
        disconnect?.();
        location.reload();
      }
    } catch (error) {
      onError(error);
    } finally {
      setRevoking(false);
    }
  };

  return (
    <button
      className={cn(
        "flex w-full items-center space-x-1.5 px-2 py-1.5 text-left text-gray-700 text-sm dark:text-gray-200",
        className
      )}
      disabled={revoking}
      onClick={async () => {
        await logout();
        onClick?.();
      }}
      type="button"
    >
      <ArrowRightStartOnRectangleIcon className="size-4" />
      <div>登出</div>
    </button>
  );
};

export default Logout;
