import { getAvatar } from "../../../shared/api";
import { getApplies } from "../../../shared/features/applies/api/apiApplies";
import { getFavorite } from "../../../shared/features/favorites/api/apiFavorites";
import { supabase } from "../../../shared/services/api/supabase";

export const getResume = async (id: number) => {
  const { data, error } = await supabase
    .from("resumes")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  if (!data) return null;

  const favorite = await getFavorite(data.id);
  const appliesData = await getApplies(data.id);
  const avatar = data.profiles?.avatar ? await getAvatar(data.profiles.avatar) : null;

  return {
    ...data,
    isInFavorites: !!favorite,
    isInApplies: !!appliesData,
    profiles: { ...data.profiles, avatar },
  };
};
