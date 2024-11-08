import {createTrackedSelector} from "react-tracked";
import {create} from "zustand";

interface State {
    degreesOfSeparation: number;
    onlyFollowers: boolean;
    setDegreesOfSeparation: (degreesOfSeparation: number) => void;
    setOnlyFollowers: (onlyFollowers: boolean) => void;
}

const store = create<State>((set) => ({
    degreesOfSeparation: 2,
    onlyFollowers: false,
    setDegreesOfSeparation: (degreesOfSeparation) =>
        set(() => ({degreesOfSeparation})),
    setOnlyFollowers: (onlyFollowers) => set(() => ({onlyFollowers})),
}));

export const useReferenceModuleStore = createTrackedSelector(store);
