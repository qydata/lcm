import type { Publication } from "@hey/lens";

import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";

interface State {
  publicationContent: string;
  quotedPublication: Publication | null;
  setPublicationContent: (publicationContent: string) => void;
  setQuotedPublication: (quotedPublication: Publication | null) => void;
  setTags: (tags: null | string[]) => void;
  tags: null | string[];
}

const store = create<State>((set) => ({
  publicationContent: "",
  quotedPublication: null,
  setPublicationContent: (publicationContent) =>
    set(() => ({ publicationContent })),
  setQuotedPublication: (quotedPublication) =>
    set(() => ({ quotedPublication })),
  setTags: (tags) => set(() => ({ tags })),
  tags: null
}));

export const usePublicationStore = createTrackedSelector(store);
