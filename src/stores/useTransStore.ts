import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { transItem } from '../constants/types';

interface transState {
  amountList: Array<transItem>;
  setTransWithFetchData: (data: Array<transItem>) => void;
  deleteTransWithId: (id: number) => void;
  deleteTransWithIds: (ids: Array<number>) => void;
  addTrans: (data: transItem) => void;
  selectedId: Array<number>;
  setSelectedId: (id: number) => void;
  clearSelectedId: () => void;
}

export const useTransStore = create<transState>()(
  persist(
    (set, get) => ({
      amountList: [],

      setTransWithFetchData: (data: Array<transItem>) => set({ amountList: data }),

      deleteTransWithId: (id: number) =>
        set({ amountList: get().amountList.filter(item => item.id !== id) }),

      deleteTransWithIds: (ids: Array<number>) =>
        set({ amountList: get().amountList.filter(item => !ids.includes(item.id)) }),

      addTrans: (data: transItem) =>
        set({
          amountList: produce(get().amountList, draft => {
            !draft.some(item => item.id === data.id)
              ? draft.push(data)
              : (draft[draft.findIndex(item => item.id === data.id)] = data);
          }),
        }),

      selectedId: [],

      setSelectedId: (id: number) =>
        set({
          selectedId: produce(get().selectedId, draft => {
            draft.includes(id) ? draft.splice(draft.indexOf(id), 1) : draft.push(id);
          }),
        }),

      clearSelectedId: () => set({ selectedId: [] }),
    }),
    {
      name: 'trans-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
