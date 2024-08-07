import axios from "axios";
import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import { supabase } from "../../../shared/services";
import { API_URL } from "../../shared/api/const";

export const getVacancyThirdPartyApi = async (id?: string, companyCode?: string) => {
  const result = await axios({
    method: "get",
    url: `${API_URL}/vacancy/${companyCode}/${id}`,
  });

  const data = await result.data;

  return data.results.vacancies[0].vacancy;
};

export const getVacancy = async (id?: number) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("vacancies")
    .select("*,profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой вакансии из базы данных");
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
