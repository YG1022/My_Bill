import { supabaseClient } from '../supabaseClient';
import { profile } from '../constants/types';

const createProfile = (profile: profile) => {
  const { email, realname, gender, prefix, phonenumber, birthday } = profile;

  return supabaseClient
    .from('profiles')
    .insert([
      {
        email: email,
        real_name: realname,
        gender: gender,
        prefix: prefix,
        phone_number: phonenumber,
        birthday: birthday,
      },
    ])
    .select();
};

export default createProfile;