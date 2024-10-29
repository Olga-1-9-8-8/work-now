import { UserAttributes } from "@supabase/supabase-js";
import { supabase } from "../../../shared/services/supabase";
import { GenderType } from "../../../shared/types";

export interface UpdateUserTypeProps {
  userName?: string;
  avatarFile?: File | null;
  gender?: GenderType | "";
  age?: string;
  password?: string;
}

export const updateUser = async ({
  password,
  userName,
  avatarFile,
  age,
  gender,
}: UpdateUserTypeProps) => {
  let updateData: UserAttributes = {};
  if (password) {
    updateData = {
      password,
    };
  }

  if (userName || age || gender) {
    updateData = {
      data: { username: userName, age, gender },
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    throw new Error(error.message);
  }

  if (avatarFile === undefined) return data;

  if (data.user.user_metadata.avatar) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .remove([data.user.user_metadata.avatar]);

    if (storageError) {
      throw new Error(storageError.message);
    }
  }

  const avatarFileName = `avatar-${data.user.id} - ${Math.random()}`;

  if (avatarFile) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(avatarFileName, avatarFile);

    if (storageError) {
      throw new Error(storageError.message);
    }
  }

  const { data: updatedUser, error: updatedError } = await supabase.auth.updateUser({
    data: {
      avatar: avatarFile ? avatarFileName : "",
    },
  });

  if (updatedError) {
    throw new Error(updatedError.message);
  }

  return updatedUser;
};
