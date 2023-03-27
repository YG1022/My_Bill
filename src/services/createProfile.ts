import { supabaseClient } from '../supabaseClient';
import { profile } from '../constants/types';

const createProfile = (profile: profile) => {
  return supabaseClient
    .from('profiles')
    .insert([{
      email: profile.email,
      phone_number: profile.phonenumber,
      introduction: profile.introduction,
      gender: profile.gender,
    }])
    .select();
};

export default createProfile;