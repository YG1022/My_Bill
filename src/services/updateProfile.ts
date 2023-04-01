import { supabaseClient } from "../supabaseClient";
import { fetchProfile, profile } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";

const updateProfile = async (uuid: string, profile: profile): Promise<{
  data: fetchProfile[],
  error: PostgrestError
}> => {
  const { email, realname, gender, prefix, phonenumber, birthday } = profile;
  const { data: temData } = await matchProfileIdWithUuid(uuid);

  const { data, error } = await supabaseClient
    .from("profiles")
    .update([{
      email: email,
      real_name: realname,
      gender: gender,
      prefix: prefix,
      phone_number: phonenumber,
      birthday: birthday,
    }])
    .eq("id", temData[0].id)
    .select<any, fetchProfile>();

  return { data, error };
};

export default updateProfile;