import { fetchProfile, fetchUser } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient";

const getProfile = async (
  uuid: string
): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
  const { data: temData } = await supabaseClient
    .from("users")
    .select<any, fetchUser>()
    .eq("uuid", uuid);

  const id = temData[0].id;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select<any, fetchProfile>()
    .eq("id", id);

  return { data, error };
};

export default getProfile;
