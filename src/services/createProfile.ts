import { supabaseClient } from "../supabaseClient";
import { fetchProfile, profile } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";

const createProfile = async (profile: profile): Promise<{ data: fetchProfile[], error: PostgrestError }> => {
  const { email, realname, gender, prefix, phonenumber, birthday } = profile;

  const { data, error } = await supabaseClient
    .from("profiles")
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
    .select<any, fetchProfile>();

  return { data, error };
};

export default createProfile;