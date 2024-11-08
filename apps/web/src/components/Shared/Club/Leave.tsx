import type { FC } from "react";

import errorToast from "@helpers/errorToast";
import { getAuthApiHeaders } from "@helpers/getAuthApiHeaders";
import { LCM_API_URL } from "@hey/data/constants";
import { Button } from "@hey/ui";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface LeaveProps {
  id: string;
  setJoined: (joined: boolean) => void;
  small: boolean;
}

const Leave: FC<LeaveProps> = ({ id, setJoined, small }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLeave = async () => {
    try {
      setIsLoading(true);
      await axios.post(
        `${LCM_API_URL}/clubs/leave`,
        { id },
        { headers: getAuthApiHeaders() }
      );

      toast.success("Left club successfully!");
      setJoined(false);
    } catch (error) {
      errorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      aria-label="Joined"
      disabled={isLoading}
      onClick={handleLeave}
      outline
      size={small ? "sm" : "md"}
    >
      Joined
    </Button>
  );
};

export default Leave;
