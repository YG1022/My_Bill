import { supabaseClient } from '../supabaseClient';

const getTransItems = () => {
    return supabaseClient.from('transactions').select();
};

export { getTransItems };
