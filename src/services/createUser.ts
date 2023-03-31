import { fetchUser, user } from "../constants/types";
import { supabaseClient } from "../supabaseClient";
import uuid from "react-uuid";
import { PostgrestError } from "@supabase/supabase-js";

const createUser = async (user: user): Promise<{ data: fetchUser[], error: PostgrestError }> => {
  const { accountname, password } = user;

  const { data, error } = await supabaseClient
    .from("users")
    .insert([{ account_name: accountname, password: password, uuid: uuid() }])
    .select<any, fetchUser>();

  return { data, error };
};

export default createUser;
