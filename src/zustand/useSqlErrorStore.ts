import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';

interface PostgrestErrorState {
  sqlError: PostgrestError | null;
  setSqlError: (error: PostgrestError) => void;
}

export const useSqlErrorStore = create<PostgrestErrorState>((set, get) => ({
  sqlError: null,
  setSqlError: (error: PostgrestError) => {
    set(() => ({ sqlError: error }));
  },
}));
