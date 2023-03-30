import { supabaseClient } from "../supabaseClient";
import { transItem } from "../constants/types";
import { PostgrestError } from "@supabase/supabase-js";

const deleteTransItem = async (id: number): Promise<{ data: transItem[], error: PostgrestError }> => {
  const { data, error } = await supabaseClient
    .from("transactions")
    .delete()
    .match({ id })
    .select<any, transItem>();

  return { data, error };
};

export { deleteTransItem };
