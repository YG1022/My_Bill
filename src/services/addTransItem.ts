import { supabaseClient } from '../supabaseClient';
import { transItem } from '../constants/types';
import { PostgrestError } from '@supabase/supabase-js';

const addTransItem = async (values, id: string | null): Promise<{ data: transItem[], error: PostgrestError }> => {
  const { tags, ...extraData } = values;
  const formData = { tags: tags.tags, ...extraData };

  if (id === null) {
    const { data, error } = await supabaseClient
      .from('transactions')
      .insert([{ amount: formData.amount, category: formData.category, tags: formData.tags }])
      .select<any, transItem>();
    return { data, error };
  }
  if (id) {
    const { data, error } = await supabaseClient
      .from('transactions')
      .update({ amount: formData.amount, category: formData.category, tags: formData.tags })
      .eq('id', Number(id))
      .select<any, transItem>();
    return { data, error };
  }
};

export { addTransItem };
