import { fetchProfile } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";

const getProfile = async (
  uuid: string,
): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
  const { data: temData } = await matchProfileIdWithUuid(uuid);

  const { data, error } = await supabaseClient
    .from("profiles")
    .select<any, fetchProfile>()
    .eq("id", temData[0].id);

  return { data, error };
};

export default getProfile;
