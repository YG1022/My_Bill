import { supabase } from '../../../supabaseClient';

const getBillItems = () => {
    return supabase.from('bills').select();
};

export { getBillItems };
