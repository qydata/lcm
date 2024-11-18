import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";

type State = {};

const store = create<State>((set) => ({}));

export const useImpressionsStore = createTrackedSelector(store);
