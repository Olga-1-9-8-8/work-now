import { GenderType } from "../../../types";
import { supabase } from "../../supabase";

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
