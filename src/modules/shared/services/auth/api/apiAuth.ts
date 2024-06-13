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

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

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
