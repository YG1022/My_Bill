import { supabaseClient } from '../supabaseClient';
import { fetchUser } from '../constants/types';

const repeatabilityCheck = (accountname) => {
  const nameCheck = supabaseClient
    .from('users')
    .select<any, fetchUser>()
    .eq('account_name', accountname);

  return { nameCheck };
};

export default repeatabilityCheck;