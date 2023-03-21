import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';
import produce from 'immer';

interface PostgrestErrorState {
  sqlError: PostgrestError | null;
  setSqlError: (error: PostgrestError | null) => void;
}

export const useSqlErrorStore = create<PostgrestErrorState>(
  (set, get) => ({
    sqlError: null,
    setSqlError: (error: PostgrestError | null) => set({
      sqlError:
        produce(get().sqlError, () => error),
    }),
  }),
);