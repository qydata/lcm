import type { FC } from "react";

import errorToast from "@helpers/errorToast";
import { getAuthApiHeaders } from "@helpers/getAuthApiHeaders";
import { LCM_API_URL } from "@lcm/data/constants";
import { Button } from "@lcm/ui";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface JoinProps {
  id: string;
  setJoined: (joined: boolean) => void;
  small: boolean;
}

const Join: FC<JoinProps> = ({ id, setJoined, small }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleJoin = async () => {
    try {
      setIsLoading(true);
      await axios.post(
        `${LCM_API_URL}/clubs/join`,
        { id },
        { headers: getAuthApiHeaders() }
      );

      toast.success("Joined club successfully!");
      setJoined(true);
    } catch (error) {
      errorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      aria-label="Join"
      disabled={isLoading}
      onClick={handleJoin}
      outline
      size={small ? "sm" : "md"}
    >
      Join
    </Button>
  );
};

export default Join;
