import type { FC } from "react";
import { useState } from "react";

import errorToast from "@helpers/errorToast";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  FaceFrownIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline";
import { HeyLensSignup } from "@lcm/abis";
import {
  APP_NAME,
  HANDLE_PREFIX,
  LCM_LENS_SIGNUP,
  SIGNUP_PRICE,
  ZERO_ADDRESS
} from "@lcm/data/constants";
import { Regex } from "@lcm/data/regex";
import { AUTH } from "@lcm/data/tracking";
import { useHandleToAddressesQuery } from "@lcm/lens";
import { Button, Form, Input, Spinner, useZodForm } from "@lcm/ui";
import Script from "next/script";
import useHandleWrongNetwork from "src/hooks/useHandleWrongNetwork";
import { parseEther } from "viem";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { object, string } from "zod";

import { useSignupStore } from ".";
import AuthMessage from "../AuthMessage";
import Moonpay from "./Moonpay";

declare global {
  interface Window {
    createLemonSqueezy: any;
    LemonSqueezy: {
      Setup: ({ eventHandler }: { eventHandler: any }) => void;
      Url: {
        Close: () => void;
        Open: (checkoutUrl: string) => void;
      };
    };
  }
}

export const SignupMessage = () => (
  <AuthMessage
    description="让我们从为您购买身份标识开始。你说买？是的 - 身份标识需要花一点钱来支持网络和防止机器人进入"
    title={`欢迎来到${APP_NAME}!`}
  />
);

const newProfileSchema = object({
  handle: string()
    .min(5, { message: "handle 长度必须至少为 5 个字符" })
    .max(26, { message: "Handle 长度不得超过 26 个字符" })
    .regex(Regex.handle, {
      message: "身份标识必须以字母/数字开头，两者之间只允许 _"
    })
});

const ChooseHandle: FC = () => {
  const { delegatedExecutor, setChoosedHandle, setScreen, setTransactionHash } =
    useSignupStore();
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const handleWrongNetwork = useHandleWrongNetwork();
  const { data: balanceData } = useBalance({
    address,
    query: { refetchInterval: 2000 }
  });
  const form = useZodForm({ mode: "onChange", schema: newProfileSchema });
  const handle = form.watch("handle");

  let balance;
  if (balanceData) {
    balance = Number(balanceData.formatted);
  } else {
    balance = 0;
  }

  const hasBalance = balance && balance >= SIGNUP_PRICE;
  const canCheck = Boolean(handle && handle.length > 4);
  const isInvalid = !form.formState.isValid;

  const { writeContractAsync } = useWriteContract({
    mutation: {
      onError: errorToast,
      onSuccess: (hash: string) => {
        console.log(AUTH.SIGNUP, { price: SIGNUP_PRICE, via: "crypto" });
        setTransactionHash(hash);
        setChoosedHandle(`${HANDLE_PREFIX}${handle.toLowerCase()}`);
        setScreen("minting");
      }
    }
  });

  useHandleToAddressesQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => setIsAvailable(!data.handleToAddresses[0]?.address),
    variables: {
      handle: `${HANDLE_PREFIX}${handle?.toLowerCase()}`
    }
  });

  const handleMint = async (handle: string) => {
    try {
      setIsLoading(true);
      await handleWrongNetwork();

      return await writeContractAsync({
        abi: HeyLensSignup,
        address: LCM_LENS_SIGNUP,
        args: [
          [address, ZERO_ADDRESS, "0x"],
          handle,
          ["0xE8c6D8db1a97BCbC16DfAdD46E7Ad5594b5117D9"]
        ],
        functionName: "createProfileWithHandleUsingCredits",
        value: parseEther(SIGNUP_PRICE.toString())
      });
    } catch (error) {
      console.log(error);
      errorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  const disabled = !canCheck || !isAvailable || isLoading || isInvalid;

  return (
    <div className="space-y-5">
      <Script
        id="lemon-js"
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="afterInteractive"
      />
      <SignupMessage />
      <Form
        className="space-y-5 pt-3"
        form={form}
        onSubmit={async ({ handle }) => await handleMint(handle.toLowerCase())}
      >
        <div className="mb-5">
          <Input
            hideError
            placeholder="你的身份标识"
            prefix="@lcm/"
            {...form.register("handle")}
          />
          {canCheck && !isInvalid ? (
            isAvailable === false ? (
              <div className="mt-2 flex items-center space-x-1 text-red-500 text-sm">
                <FaceFrownIcon className="size-4" />
                <b>身份标识不可用！</b>
              </div>
            ) : isAvailable === true ? (
              <div className="mt-2 flex items-center space-x-1 text-green-500 text-sm">
                <CheckIcon className="size-4" />
                <b>那么您很幸运 - 它可用！</b>
              </div>
            ) : null
          ) : canCheck && isInvalid ? (
            <div className="mt-2 flex items-center space-x-1 text-red-500 text-sm">
              <ExclamationTriangleIcon className="size-4" />
              <b>{form.formState.errors.handle?.message}</b>
            </div>
          ) : (
            <div className="ld-text-gray-500 mt-2 flex items-center space-x-1 text-sm">
              <FaceSmileIcon className="size-4" />
              <b>希望你会得到一个好的！</b>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3">
          {hasBalance ? (
            <Button
              className="w-full justify-center"
              disabled={disabled}
              icon={
                isLoading ? (
                  <Spinner className="mr-0.5" size="xs" />
                ) : (
                  <img
                    alt="Lens Logo"
                    className="h-3"
                    height={12}
                    src="/lens.svg"
                    width={19}
                  />
                )
              }
              type="submit"
            >
              使用 {SIGNUP_PRICE} CT 铸造
            </Button>
          ) : (
            <Moonpay disabled={disabled} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default ChooseHandle;
