import { supabase } from '../../../supabaseClient';

const addBillItem = amount => {
  return supabase.from('bills').insert([{ amount }]).select();
};

export { addBillItem };
