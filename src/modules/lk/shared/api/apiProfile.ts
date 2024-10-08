import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { supabase } from "../../../shared/services";

export const getProfileResumes = async (page: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("resumes")
    .select("*", { count: "exact" })
    .eq("user_id", session.user.id)
    .order("creation_date", { ascending: false })
    .order("updated_at", { ascending: false });

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("lk.resumes.api.getProfileResumesError"));
  }

  return { data, totalCount: count };
};

export const getProfileVacancies = async (page: number, t: (key: string) => string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("vacancies")
    .select("*", { count: "exact" })
    .eq("user_id", session.user.id)
    .order("creation_date", { ascending: false })
    .order("updated_at", { ascending: false });

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("lk.vacancies.api.getProfileVacanciesError"));
  }

  return { data, totalCount: count };
};
