import { supabase } from "../../supabase";

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
