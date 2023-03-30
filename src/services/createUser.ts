import { user } from "../constants/types";
import { supabaseClient } from "../supabaseClient";
import uuid from "react-uuid";

const createUser = (user: user) => {
  const { accountname, password } = user;

  return supabaseClient
    .from("users")
    .insert([{ account_name: accountname, password: password, uuid: uuid() }])
    .select();
};

export default createUser;
