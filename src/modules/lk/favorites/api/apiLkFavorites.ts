import { supabase } from "../../../shared/services/api/supabase";
import { FavoriteType } from "../../shared/types/FavoriteType";

export const addFavorite = async (newFavorite: FavoriteType) => {
  const { data, error } = await supabase
    .from("profileFavorites")
    .insert([newFavorite])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с добавлением в Избранное");
  }

  return data;
};

export const deleteFavorite = async (id: number) => {
  const { data, error } = await supabase.from("profileFavorites").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления отклика из Избранного");
  }

  return data;
};
