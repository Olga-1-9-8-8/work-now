import { supabase } from "../../../shared/services";

export const getResume = async (t: (key: string) => string, id?: number) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("resumes")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("resume.api.getResumeError"));
  }

  if (!data) return null;

  return {
    ...data,
    profiles: data.profiles ? { ...data.profiles } : null,
  };
};
