import { UserAttributes } from "@supabase/supabase-js";
import { GenderType } from "../../../types";
import { supabase } from "../../api/supabase";
import { SignUpFormType } from "../types/SignUpFormType";

export const signUp = async ({ username, password, email, phone }: SignUpFormType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        phone,
        avatar: "",
        gender: "",
        age: "",
      },
    },
  });

  if (data?.user && data.user.identities && data.user.identities.length === 0) {
    throw new Error("Аккаунт с данным email уже существует");
  }

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

interface LogInProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LogInProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const resetPassword = async ({ email }: { email: string }) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/reset-password",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export const deleteAccount = async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session?.user.user_metadata.avatar) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .remove([data.session.user.user_metadata.avatar]);

    if (storageError) {
      throw new Error(storageError.message);
    }
  }

  const { error } = await supabase.rpc("delete_user");

  if (error) {
    throw new Error(error.message);
  }
};

export const getUser = async () => {
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    return null;
  }

  const { data: userData, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return userData?.user;
};

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
