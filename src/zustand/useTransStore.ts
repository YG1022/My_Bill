import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import produce from 'immer';
import { transItem } from '../constants/types';

interface transState {
  amountList: Array<transItem>;
  setTransWithFetchData: (data: Array<transItem>) => void;
  addTransItem: (data: transItem) => void;
}

export const useTransStore = create<transState>()(
  persist(
    (set, get) => ({
      amountList: [],
      setTransWithFetchData: (data: Array<transItem>) => set({
        amountList: produce(get().amountList, () => data),
      }),
      addTransItem: (data: transItem) =>
        set({
          amountList: produce(get().amountList, draft => {
            draft.push(data);
          }),
        }),
    }),
    {
      name: 'trans-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
