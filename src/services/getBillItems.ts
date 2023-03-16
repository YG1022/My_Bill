import { supabaseClient } from '../supabaseClient';

const getBillItems = () => {
    return supabaseClient.from('transactions').select();
};

export { getBillItems };
