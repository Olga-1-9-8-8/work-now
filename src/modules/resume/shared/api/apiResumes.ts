import { ResumeApiType } from "../../../shared/api";
import { supabase } from "../../../shared/services/api/supabase";

export const createEditResume = async (
  newResume: Omit<ResumeApiType, "id"> & { id?: number },
  t: (key: string) => string,
) => {
  const query = newResume.id
    ? supabase.from("resumes").update(newResume).eq("id", newResume.id)
    : supabase.from("resumes").insert([newResume]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error(t("resume.api.createEditResumeError"));
  }

  return data;
};
