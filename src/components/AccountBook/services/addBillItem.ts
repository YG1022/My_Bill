import { supabase } from '../../../supabaseClient';

const addBillItem = (amount, date) => {
    return supabase.from('bills').insert([{ amount, date }]).select();
};

export { addBillItem };