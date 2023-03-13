import { supabase } from '../supabaseClient';

const addBillItem = values => {
  const { tags, ...extraData } = values;
  const formData = { tags: tags.tags.join(), ...extraData };

  return supabase
    .from('transactions')
    .insert([{ amount: formData.amount, category: formData.category, tags: formData.tags }])
    .select();
};

export { addBillItem };
