import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { transItem } from '../constants/types';

interface transState {
  amountList: Array<transItem>;
  setTransWithFetchData: (data: Array<transItem>) => void;
  deleteTransWithId: (id: number) => void;
}

export const useTransStore = create<transState>()(
  persist(
    (set, get) => ({
      amountList: [],
      setTransWithFetchData: (data: Array<transItem>) =>
        set({
          amountList: data,
        }),
      deleteTransWithId: (id: number) =>
        set({
          amountList: get().amountList.filter(item => item.id !== id),
        }),
    }),
    {
      name: 'trans-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
