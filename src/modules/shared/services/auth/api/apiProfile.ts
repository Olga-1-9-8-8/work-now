import { supabase } from "../../api/supabase";

export const getProfile = async (id?: string) => {
  if (!id) return null;

  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return profileData;
};
