import type {FC} from "react";

import {APP_NAME} from "@lcm/data/constants";
import {AUTH} from "@lcm/data/tracking";
import {Button, Card} from "@lcm/ui";
import {useGlobalModalStateStore} from "src/store/non-persisted/useGlobalModalStateStore";

import {useSignupStore} from "./Signup";

const SignupCard: FC = () => {
  const { setShowAuthModal } = useGlobalModalStateStore();
  const { setScreen } = useSignupStore();

  const handleSignupClick = () => {
    setScreen("choose");
    setShowAuthModal(true, "signup");
    console.log(AUTH.OPEN_SIGNUP);
  };

  return (
    <Card as="aside" className="mb-4 space-y-4 p-5">
      <img
        alt="Dizzy emoji"
        className="mx-auto size-14"
        src={`/images/emojis/dizzy.png`}
      />
      <div className="space-y-3 text-center">
        <div className="font-bold">立即获取您的 {APP_NAME} 个人资料！</div>
        <div>
          <Button onClick={handleSignupClick} size="lg">
            立即注册
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SignupCard;
