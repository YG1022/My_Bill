import { supabase } from '../supabaseClient';

const getBillItems = () => {
    return supabase.from('transactions').select();
};

export { getBillItems };
