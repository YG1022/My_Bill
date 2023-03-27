import { user } from '../constants/types';
import { supabaseClient } from '../supabaseClient';

const createUser = (user: user) => {
  return supabaseClient
    .from('users')
    .insert([{ account_name: user.accountname, password: user.password }])
    .select();
};

export default createUser;