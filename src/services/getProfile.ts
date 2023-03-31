import { fetchProfile } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient";

const getProfile = async (
  uuid: string
): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select<any, fetchProfile>()
    .eq("uuid", uuid);

  return { data, error };
};
