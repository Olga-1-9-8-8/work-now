import { supabase } from "../../../shared/services/api/supabase";

export const getResume = async (id: string) => {
  const { data, error } = await supabase
    .from("resumes")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  return data;
};

export const updateResume = async (id: number, applicantsQuantity: number) => {
  const { data, error } = await supabase
    .from("resumes")
    .update({ applicants_quantity: applicantsQuantity })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Резюме не может быть обновлено");
  }

  return data;
};
