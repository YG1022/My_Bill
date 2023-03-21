import { supabaseClient } from '../supabaseClient';

const addTransItem = values => {
  const { tags, ...extraData } = values;
  const formData = { tags: tags.tags, ...extraData };

  return supabaseClient
    .from('transactions')
    .insert([{ amount: formData.amount, category: formData.category, tags: formData.tags }])
    .select();
};

export { addTransItem };
