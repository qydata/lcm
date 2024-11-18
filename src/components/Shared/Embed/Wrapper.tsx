import type { FC, ReactNode } from "react";

import stopEventPropagation from "@lcm/helpers/stopEventPropagation";
import { Card } from "@lcm/ui";
import cn from "@lcm/ui/cn";

interface WrapperProps {
  children: ReactNode;
  className?: string;
  zeroPadding?: boolean;
}

const Wrapper: FC<WrapperProps> = ({
  children,
  className = "",
  zeroPadding = false
}) => (
  <Card
    className={cn("mt-3 cursor-auto", className, { "p-5": !zeroPadding })}
    forceRounded
    onClick={stopEventPropagation}
  >
    {children}
  </Card>
);

export default Wrapper;
