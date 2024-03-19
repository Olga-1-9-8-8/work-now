import { supabase } from "../../../shared/services/api/supabase";

export const getResumes = async () => {
  const { data, error } = await supabase.from("resumes").select("*");

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }
  return data;
};

export const createResume = async (newResume: any) => {
  const { data, error } = await supabase.from("resumes").insert([newResume]);

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
