import { supabase } from "../../../services/api/supabase";

export const getAvatar = async (avatar: string) => {
  const { data: avatarFile, error: avatarFileError } = await supabase.storage
    .from("avatars")
    .download(avatar);

  if (avatarFileError) {
    throw new Error(avatarFileError.message);
  }

  const url = URL.createObjectURL(avatarFile);

  return url;
};
