import { supabase } from '../supabaseClient';

const addBillItem = values => {
  return supabase
    .from('transactions')
    .insert([{ amount: values.amount, category: values.category }])
    .select();
};

export { addBillItem };
