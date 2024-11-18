import type { OptimisticTransaction } from "@lcm/types/misc";

import { IndexDB } from "@lcm/data/storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import createIdbStorage from "../helpers/createIdbStorage";

interface State {
  addTransaction: (txn: OptimisticTransaction) => void;
  hydrateTxnQueue: () => OptimisticTransaction[];
  indexedPostHash: null | string;
  removeTransaction: (hashOrId: string) => void;
  reset: () => void;
  setIndexedPostHash: (hash: string) => void;
  txnQueue: OptimisticTransaction[];
}

const store = create(
  persist<State>(
    (set, get) => ({
      addTransaction: (txn) =>
        set((state) => ({ txnQueue: [...state.txnQueue, txn] })),
      hydrateTxnQueue: () => {
        return get().txnQueue;
      },
      indexedPostHash: null,

      removeTransaction: (hashOrId) =>
        set((state) => ({
          txnQueue: state.txnQueue.filter(
            (txn) => txn.txHash !== hashOrId && txn.txId !== hashOrId
          )
        })),
      reset: () => set({ txnQueue: [] }),
      setIndexedPostHash: (hash) => set({ indexedPostHash: hash }),
      txnQueue: []
    }),
    { name: IndexDB.TransactionStore, storage: createIdbStorage() }
  )
);

export const hydrateTxnQueue = () => store.getState().hydrateTxnQueue();
export const useTransactionStore = store;
