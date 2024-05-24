import { supabase } from "../../../shared/services/api/supabase";
import { ResumeItem } from "../../shared/types";

export const getResume = async (id: string) => {
  const { data, error } = await supabase.from("resumes").select("*,users(*)").eq("id", id).single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  return data;
};

export const updateResume = async (id: number, applicantsQuantity: number) => {
  const { data, error } = await supabase
    .from("resumes")
    .update({ applicantsQuantity })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Резюме не может быть обновлено");
  }

  return data;
};

// TODO дописать
export const addResumeToFavorites = async (newResume: ResumeItem, userId?: number) => {
  let query: any = supabase.from("favorites");

  if (!newResume.id) {
    query = query.insert([newResume]);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error, userId);
    throw new Error("Ошибка при добавлении резюме в Избранное");
  }

  return data;
};
