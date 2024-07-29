import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import { supabase } from "../../../shared/services";

export const getResume = async (id?: number) => {
  if (!id) return null;
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

  const [favorite, appliesData, avatar] = await Promise.all([
    getFavorite(data.id),
    getApply(data.id),
    data.profiles?.avatar ? getAvatar(data.profiles.avatar) : null,
  ]);

  return {
    ...data,
    isInFavorites: !!favorite,
    isInApplies: !!appliesData,
    profiles: data.profiles ? { ...data.profiles, avatar } : null,
  };
};