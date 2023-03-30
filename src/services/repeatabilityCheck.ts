import { supabaseClient } from "../supabaseClient";
import { fetchProfile, fetchUser } from "../constants/types";

const repeatabilityCheck = (accountname, email, phonenumber) => {
  const nameCheck = supabaseClient
    .from("users")
    .select<any, fetchUser>()
    .eq("account_name", accountname);

  const emailCheck = supabaseClient.from("profiles").select<any, fetchProfile>().eq("email", email);

  const phoneCheck = supabaseClient
    .from("profiles")
    .select<any, fetchProfile>()
    .eq("phone_number", phonenumber);

  return { nameCheck, emailCheck, phoneCheck };
};

export default repeatabilityCheck;
