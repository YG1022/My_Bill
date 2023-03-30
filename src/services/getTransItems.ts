import { supabaseClient } from "../supabaseClient";
import { transItem } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";

const getTransItems = async (id?: number): Promise<{ data: transItem[]; error: PostgrestError }> => {
  const uuid = localStorage.getItem("uuid");

  if (id) {
    const { data, error } = await supabaseClient
      .from("transactions")
      .select<any, transItem>()
      .eq("uuid", uuid)
      .eq("id", id);
    return { data, error };
  } else {
    const { data, error } = await supabaseClient
      .from("transactions")
      .select<any, transItem>()
      .eq("uuid", uuid);
    return { data, error };
  }
};

export { getTransItems };
