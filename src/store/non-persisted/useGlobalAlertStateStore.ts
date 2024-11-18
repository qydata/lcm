import type { Post, Profile } from "@lcm/lens";

import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";

interface State {
  blockingorUnblockingProfile: null | Profile;
  deletingPublication: Publication | null;
  modingPublication: Post | null;
  setShowBlockOrUnblockAlert: (
    showBlockOrUnblockAlert: boolean,
    blockingorUnblockingProfile: null | Profile
  ) => void;
  setShowGardenerActionsAlert: (
    showGardenerActionsAlert: boolean,
    modingPublication: Post | null
  ) => void;
  setShowPublicationDeleteAlert: (
    showPublicationDeleteAlert: boolean,
    deletingPublication: Publication | null
  ) => void;
  showBlockOrUnblockAlert: boolean;
  showGardenerActionsAlert: boolean;
  showPublicationDeleteAlert: boolean;
}

const store = create<State>((set) => ({
  blockingorUnblockingProfile: null,
  deletingPublication: null,
  forceDeletePublication: false,
  modingPublication: null,
  setShowBlockOrUnblockAlert: (
    showBlockOrUnblockAlert,
    blockingorUnblockingProfile
  ) => set(() => ({ blockingorUnblockingProfile, showBlockOrUnblockAlert })),
  setShowGardenerActionsAlert: (showGardenerActionsAlert, modingPublication) =>
    set(() => ({ modingPublication, showGardenerActionsAlert })),
  setShowPublicationDeleteAlert: (
    showPublicationDeleteAlert,
    deletingPublication
  ) => set(() => ({ deletingPublication, showPublicationDeleteAlert })),
  showBlockOrUnblockAlert: false,
  showGardenerActionsAlert: false,
  showPublicationDeleteAlert: false
}));

export const useGlobalAlertStateStore = createTrackedSelector(store);
