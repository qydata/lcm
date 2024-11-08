import type {FC} from "react";

import SwitchNetwork from "@components/Shared/SwitchNetwork";
import {Profile} from "@hey/lens";
import {createTrackedSelector} from "react-tracked";
import {CHAIN} from "src/constants";
import {useAccount, useChainId} from "wagmi";
import {create} from "zustand";

import WalletSelector from "../WalletSelector";
import ChooseHandle from "./ChooseHandle";
import Minting from "./Minting";
import Success from "./Success";

interface SignupState {
  choosedHandle: string;
  newProfile: Profile;
  screen: "choose" | "minting" | "success";
  setChoosedHandle: (handle: string) => void;
  setNewProfile: (profile: Profile) => void;
  setScreen: (screen: "choose" | "minting" | "success") => void;
  setTransactionHash: (hash: string) => void;
  transactionHash: string;
}

const store = create<SignupState>((set) => ({
  choosedHandle: "",
  newProfile: "",
  screen: "choose",
  setChoosedHandle: (handle) => set({ choosedHandle: handle }),
  setNewProfile: (profile) => set({ newProfile: profile }),
  setScreen: (screen) => set({ screen }),
  setTransactionHash: (hash) => set({ transactionHash: hash }),
  transactionHash: ""
}));

export const useSignupStore = createTrackedSelector(store);

const Signup: FC = () => {
  const { screen } = useSignupStore();
  const chain = useChainId();
  const { connector: activeConnector } = useAccount();

  return activeConnector?.id ? (
    <div className="space-y-2.5">
      {chain === CHAIN.id ? (
        screen === "choose" ? (
          <ChooseHandle />
        ) : screen === "minting" ? (
          <Minting />
        ) : (
          <Success />
        )
      ) : (
        <SwitchNetwork toChainId={CHAIN.id} />
      )}
    </div>
  ) : (
    <WalletSelector />
  );
};

export default Signup;
