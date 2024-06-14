import { supabase } from "../../../shared/services/api/supabase";

export const getProfile = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
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
