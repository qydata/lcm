import {createTrackedSelector} from "react-tracked";
import {create} from "zustand";

interface State {
}

const store = create<State>((set) => ({}));

export const useImpressionsStore = createTrackedSelector(store);
