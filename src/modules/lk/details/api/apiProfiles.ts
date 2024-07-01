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

  const { data: avatarFile, error: avatarFileError } = await supabase.storage
    .from("avatars")
    .download(profileData.avatar);

  if (avatarFileError) {
    throw new Error(avatarFileError.message);
  }
  const url = URL.createObjectURL(avatarFile);

  return { ...profileData, avatar: url };
};
