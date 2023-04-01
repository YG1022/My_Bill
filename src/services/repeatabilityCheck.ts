import { supabaseClient } from "../supabaseClient";
import { fetchProfile, fetchUser } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";
import matchProfileIdWithUuid from "./matchProfileIdWithUuid";

const repeatabilityCheck = (accountname: string, email: string, phonenumber: string) => {
  const nameCheck = async (): Promise<{ data: fetchUser[]; error: PostgrestError }> => {
    const { data, error } = await supabaseClient
      .from("users")
      .select<any, fetchUser>()
      .eq("account_name", accountname);
    return { data, error };
  };

  const emailCheck = async (): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select<any, fetchProfile>()
      .eq("email", email);
    return { data, error };
  };

  const phoneCheck = async (): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select<any, fetchProfile>()
      .eq("phone_number", phonenumber);
    return { data, error };
  };

  const emailCheckWithUuid = async (
    uuid: string,
  ): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
    const { data: temData } = await matchProfileIdWithUuid(uuid);

    const { data, error } = await supabaseClient
      .from("profiles")
      .select<any, fetchProfile>()
      .neq("id", temData[0].id)
      .eq("email", email);

    return { data, error };
  };

  const phoneCheckWithUuid = async (
    uuid: string,
  ): Promise<{ data: fetchProfile[]; error: PostgrestError }> => {
    const { data: temData } = await matchProfileIdWithUuid(uuid);

    const { data, error } = await supabaseClient
      .from("profiles")
      .select<any, fetchProfile>()
      .neq("id", temData[0].id)
      .eq("phone_number", phonenumber);

    return { data, error };
  };

  return { nameCheck, emailCheck, phoneCheck, emailCheckWithUuid, phoneCheckWithUuid };
};

export default repeatabilityCheck;
