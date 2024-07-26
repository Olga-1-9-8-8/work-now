import { supabase } from "../services/api/supabase";
import { UserEntity } from "../types";

export const getFavorite = async (id: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  const item = session.user.user_metadata.role === UserEntity.Company ? "resume_id" : "vacancy_id";

  const { data: favoriteData, error: favoriteError } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", session.user.id)
    .eq(item, id)
    .maybeSingle();

  if (favoriteError) {
    console.log(favoriteError);
    throw new Error("Проблема с загрузкой избранного из базы данных");
  }
  return favoriteData;
};
