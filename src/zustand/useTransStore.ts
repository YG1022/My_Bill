import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { transItem } from '../constants/types';

interface transState {
  amountList: Array<transItem>;
  setTransWithFetchData: (data: Array<transItem>) => void;
  deleteTransWithId: (id: number) => void;
  addTrans: (data: transItem) => void;
}

export const useTransStore = create<transState>()(
  persist(
    (set, get) => ({
      amountList: [],

      setTransWithFetchData: (data: Array<transItem>) => set({ amountList: data }),

      deleteTransWithId: (id: number) =>
        set({ amountList: get().amountList.filter(item => item.id !== id) }),

      addTrans: (data: transItem) =>
        set({
          amountList: produce(get().amountList, draft => {
            !draft.some(item => item.id === data.id)
              ? draft.push(data)
              : (draft[draft.findIndex(item => item.id === data.id)] = data);
          }),
        }),
    }),
    {
      name: 'trans-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
