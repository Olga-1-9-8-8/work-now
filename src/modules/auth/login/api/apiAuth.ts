import { supabase } from "../../../shared/services/supabase";
import { UserEntity } from "../../../shared/types";
import { SignUpFormType } from "../types/SignUpFormType";

interface SignUpProps extends Omit<SignUpFormType, "confirmPassword"> {
  t: (key: string) => string;
}

export const signUp = async ({ username, password, email, phone, isCompany, t }: SignUpProps) => {
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
        role: isCompany ? UserEntity.Company : UserEntity.Person,
      },
      emailRedirectTo: `${window.location.origin}/lk/details`,
    },
  });

  if (data?.user && data.user.identities && data.user.identities.length === 0) {
    throw new Error(t("shared.api.auth.signUpError"));
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

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};
