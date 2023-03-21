import create from 'zustand';
import produce from 'immer';
import { transItem } from '../constants/types';

interface transItemState {
  amountList: transItem[];
  setTrans: (data: Array<transItem>) => void;
}

export const useTransStore = create<transItemState>((set, get) => ({
  amountList: [],
  setTrans: (data: Array<transItem>) => {
    set(produce(state => {
      state.amountList = data;
    }));
  },
}));