import { supabaseClient } from '../supabaseClient';
import { transItem } from '../constants/types';
import { PostgrestError } from '@supabase/supabase-js';

const getTransItems = async (id: number | null): Promise<{ data: transItem[], error: PostgrestError }> => {
  if (id === null) {
    const { data, error } = await supabaseClient.from('transactions').select<any, transItem>();
    return { data, error };
  }
  if (id) {
    const { data, error } = await supabaseClient.from('transactions').select<any, transItem>().eq('id', id);
    return { data, error };
  }
};

export { getTransItems };
