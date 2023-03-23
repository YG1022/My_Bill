import { supabaseClient } from '../supabaseClient';

const deleteTransItem = (id: number) => {
  return supabaseClient.from('transactions').delete().match({ id }).select();
};

export { deleteTransItem };
