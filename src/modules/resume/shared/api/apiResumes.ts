import { ResumeApiType } from "../../../shared/api";
import { supabase } from "../../../shared/services/api/supabase";

export const createEditResume = async (newResume: Omit<ResumeApiType, "id"> & { id?: number }) => {
  let query: any = supabase.from("resumes");

  if (!newResume.id) {
    query = query.insert([newResume]);
  }
  if (newResume.id) {
    query = query.update(newResume).eq("id", newResume.id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка при создании резюме");
  }

  return data;
};

export const deleteResume = async (id: number) => {
  const { data, error } = await supabase.from("resumes").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления резюме");
  }
  return data;
};
