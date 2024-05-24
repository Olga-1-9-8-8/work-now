import { supabase } from "../../../shared/services/api/supabase";

export const getFavorites = async (userId: number) => {
  const { data, error, count } = await supabase
    .from("favorites")
    .select(`*, resumes(*),users(*)`, { count: "exact" })
    .eq("userId", userId);

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой избранного из базы данных");
  }

  return { data, totalCount: count };
};

export const addFavorite = async (resumeId: number, userId?: number) => {
  const { data, error } = await supabase
    .from("favorites")
    .insert({
      userId,
      resumeId,
    })
    .select();

  if (error) {
    console.log(error);
    throw new Error("Проблема с добавлением избранного в базу данных");
  }

  return data;
};

export const deleteFavorite = async (id: number) => {
  const { data, error } = await supabase.from("favorites").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления отклика из Избранного");
  }

  return data;
};
