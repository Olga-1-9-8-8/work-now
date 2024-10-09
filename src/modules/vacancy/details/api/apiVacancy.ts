import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import { supabase } from "../../../shared/services";

export const getVacancy = async (t: (key: string) => string, id?: number) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("vacancies")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("vacancy.api.getVacancyError"));
  }

  if (!data) return null;

  const [favorite, appliesData, avatar] = await Promise.all([
    getFavorite(data.id, t),
    getApply(data.id, t),
    data.profiles?.avatar ? getAvatar(data.profiles.avatar) : null,
  ]);

  return {
    ...data,
    isInFavorites: !!favorite,
    isInApplies: !!appliesData,
    profiles: data.profiles ? { ...data.profiles, avatar } : null,
  };
};
