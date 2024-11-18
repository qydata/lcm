import type { Post } from "@lcm/lens";
import type { FC } from "react";

import GardenerActions from "./GardenerActions";

interface HigherActionsProps {
  publication: Post;
}

const HigherActions: FC<HigherActionsProps> = ({ publication }) => {
  return (
    <div className="m-5">
      <GardenerActions publication={publication} />
    </div>
  );
};

export default HigherActions;
