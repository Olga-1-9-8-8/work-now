import { supabase } from "../../../services/supabase";
import { UserEntity } from "../../../types";
import { buildPaginationQuery } from "../../filters/server-side/utils/buildPaginationQuery";

export const getFavorites = async (page: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("favorites")
    .select("*,resumes(*,profiles(*)),vacancies(*,profiles(*))", { count: "exact" })
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false });

  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("shared.api.getFavoritesError"));
  }

  const favoritesData = {
    vacancies: data.flatMap((item) => item.vacancies).filter((item) => item !== null),
    resumes: data.flatMap((item) => item.resumes).filter((item) => item !== null),
  };

  return { data: favoritesData, totalCount: count };
};

export const addFavorite = async (id: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const isCompanyRole = session.user.user_metadata.role === UserEntity.Company;

  const { data, error } = await supabase
    .from("favorites")
    .insert({
      user_id: session.user.id,
      [isCompanyRole ? "resume_id" : "vacancy_id"]: id,
    })
    .select("resumes(*),vacancies(*)")
    .single();

  if (error) {
    console.log(error);
    throw new Error(
      isCompanyRole
        ? t("shared.api.addFavoriteResumeError")
        : t("shared.api.addFavoriteVacancyError"),
    );
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  return { ...applicationData, isCompanyRole };
};

export const deleteFavorite = async (id: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const isCompanyRole = session.user.user_metadata.role === UserEntity.Company;

  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("user_id", session.user.id)
    .eq(isCompanyRole ? "resume_id" : "vacancy_id", id)
    .select("resumes(*),vacancies(*)")
    .single();

  if (error) {
    console.log(error);
    throw new Error(t("shared.api.deleteFavoriteError"));
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  return { ...applicationData, isCompanyRole };
};
