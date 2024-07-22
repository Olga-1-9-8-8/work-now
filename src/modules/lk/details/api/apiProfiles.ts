import { getAvatar } from "../../../shared/api";
import { supabase } from "../../../shared/services/api/supabase";

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
  if (!profileData.avatar) return profileData;

  const avatar = await getAvatar(profileData.avatar);

  return { ...profileData, avatar };
};
