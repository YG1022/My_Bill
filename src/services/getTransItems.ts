import { supabaseClient } from '../supabaseClient';

const getTransItems = (id: number | null) => {
  if(id === null) return supabaseClient.from('transactions').select();
  if(id) return supabaseClient.from('transactions').select().eq('id', id);
};

export { getTransItems };
