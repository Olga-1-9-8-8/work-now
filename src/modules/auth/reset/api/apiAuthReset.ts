import { supabase } from "../../../shared/services/supabase";

export const resetPassword = async ({ email }: { email: string }) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/login/update`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
