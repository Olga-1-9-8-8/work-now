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
    throw new Error(t("lk.vacancies.api.getVacancyError"));
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

export const deleteVacancy = async (id: number, t: (key: string) => string) => {
  const { data, error } = await supabase
    .from("vacancies")
    .delete()
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("lk.vacancies.api.deleteError"));
  }
  return data;
};
