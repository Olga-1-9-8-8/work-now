import { supabase } from "../../../shared/services/api/supabase";

export const deleteResume = async (id: number, t: (key: string) => string) => {
  const { data, error } = await supabase.from("resumes").delete().eq("id", id).select("*").single();

  if (error) {
    console.log(error);
    throw new Error(t("lk.resumes.api.deleteError"));
  }
  return data;
};
