import { supabaseClient } from "../supabaseClient";
import { fetchUser } from "../constants/types";

const userSignIn = async (form): Promise<boolean> => {
  const { accountname, password } = form.getFieldsValue();

  const { data, error } = await supabaseClient
    .from("users")
    .select<any, fetchUser>()
    .eq("account_name", accountname);

  if (error) {
    console.log(error);
    return false;
  }

  return password === data[0].password;
};

export default userSignIn;