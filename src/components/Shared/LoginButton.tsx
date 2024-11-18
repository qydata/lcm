import type { FC } from "react";

import { AUTH } from "@lcm/data/tracking";
import { Button } from "@lcm/ui";
import cn from "@lcm/ui/cn";
import { useGlobalModalStateStore } from "src/store/non-persisted/useGlobalModalStateStore";

interface LoginButtonProps {
  className?: string;
  isBig?: boolean;
  isFullWidth?: boolean;
  title?: string;
}

const LoginButton: FC<LoginButtonProps> = ({
  className = "",
  isBig = false,
  isFullWidth = false,
  title = "登录"
}) => {
  const { setShowAuthModal } = useGlobalModalStateStore();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowAuthModal(true);
    console.log(AUTH.OPEN_LOGIN);
  };

  return (
    <Button
      className={cn(
        isFullWidth ? "flex w-full items-center justify-center" : "",
        className
      )}
      icon={
        <img
          alt="Lens Logo"
          className="mr-0.5 h-3"
          height={12}
          src="/lens.svg"
          width={19}
        />
      }
      onClick={handleClick}
      size={isBig ? "lg" : "md"}
    >
      {title}
    </Button>
  );
};

export default LoginButton;
