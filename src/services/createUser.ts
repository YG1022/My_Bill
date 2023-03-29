import { user } from '../constants/types';
import { supabaseClient } from '../supabaseClient';

const createUser = (user: user) => {
  const { accountname, password } = user;

  return supabaseClient
    .from('users')
    .insert([{ account_name: accountname, password: password }])
    .select();
};

export default createUser;
