import { IndexDB, Localstorage } from "@lcm/data/storage";
import sha256 from "@lcm/helpers/sha256";
import type { Profile } from "@lcm/lens";
import { delMany } from "idb-keyval";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Tokens {
  authSign: any;
  profile: null | Profile;
}

interface State {
  authSign: any;

  setSignProfile(profile: Profile): unknown;

  profile: Tokens["profile"];
  hydrateAuthSky: () => Tokens;
  signIn: (tokens: {
    authSign: string;
    profile: Profile;
  }) => void;
  signOut: () => void;
}

const sessionStorageAdapter = {
  getItem: (key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    sessionStorage.removeItem(key);
  }
};
const store = create(
  persist<State>(
    (set, get) => ({
      authSign: null,
      profile: null,
      hydrateAuthSky: () => {
        return {
          authSign: get().authSign,
          profile: get().profile
        };
      },
      signIn: ({ authSign, profile }) => {
        set({ authSign: sha256(authSign) });
        set({ profile });
      },
      setSignProfile: (profile) => {
        set({ profile: profile });
      },
      signOut: async () => {
        // Clear Localstorage
        const allLocalstorageStores = Object.values(Localstorage).filter(
          (value) => value !== Localstorage.LeafwatchStore
        );
        for (const store of allLocalstorageStores) {
          sessionStorage.removeItem(store);
        }

        // Clean XMTP keys
        const keys = Object.keys(Localstorage).filter(
          (key) =>
            key.startsWith("xmtp/production/") ||
            key.startsWith("xmtp:production:")
        );
        for (const key of keys) {
          sessionStorage.removeItem(key);
        }

        // Clear IndexedDB
        const allIndexedDBStores = Object.values(IndexDB).filter(
          (value) =>
            value !== IndexDB.VerifiedMembersStore &&
            value !== IndexDB.SearchStore
        );
        await delMany(allIndexedDBStores);
      }
    }),
    {
      name: Localstorage.AuthStore, // 存储在 sessionStorage 的键
      storage: sessionStorageAdapter // 使用 sessionStorage
    }
  )
);

export const signIn = (tokens: {
  authSign: string;
  profile: Profile;
}) => {
  store.getState().signIn(tokens);
};
export const setSignProfile = (profile: Profile) => {
  store.getState().setSignProfile(profile);
};
export const signOut = () => store.getState().signOut();
export const hydrateAuthSky = () => store.getState().hydrateAuthSky();
