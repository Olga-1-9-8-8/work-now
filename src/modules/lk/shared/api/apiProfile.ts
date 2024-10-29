import { LanguageType } from "../../../shared/configs";
import { buildPaginationQuery } from "../../../shared/features/filters/server-side/utils/buildPaginationQuery";
import { supabase } from "../../../shared/services/supabase";

export const getProfileResumes = async (
  page: number,
  t: (key: string) => string,
  language: LanguageType,
) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("resumes")
    .select("*", { count: "exact" })
    .not(`cities_${language}`, "is", null)
    .eq("user_id", session.user.id)
    .order("creation_date", { ascending: false })
    .order("updated_at", { ascending: false });

  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("lk.resumes.api.getProfileResumesError"));
  }

  return { data, totalCount: count };
};

export const getProfileVacancies = async (
  page: number,
  t: (key: string) => string,
  language: LanguageType,
) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("vacancies")
    .select("*", { count: "exact" })
    .not(`cities_${language}`, "is", null)
    .eq("user_id", session.user.id)
    .order("creation_date", { ascending: false })
    .order("updated_at", { ascending: false });

  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("lk.vacancies.api.getProfileVacanciesError"));
  }

  return { data, totalCount: count };
};
