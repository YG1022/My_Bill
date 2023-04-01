import { fetchUser } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import { supabaseClient } from "../supabaseClient";

const matchProfileIdWithUuid = async (uuid: string): Promise<{ data: fetchUser[]; error: PostgrestError }> => {
  const { data, error } = await supabaseClient
    .from("users")
    .select<any, fetchUser>()
    .eq("uuid", uuid);

  return { data, error };
};

export default matchProfileIdWithUuid;