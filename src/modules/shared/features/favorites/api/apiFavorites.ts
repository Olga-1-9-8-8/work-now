import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

export const getFavorites = async (page: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  let query = supabase
    .from("favorites")
    .select("*", { count: "exact" })
    .eq("user_id", session.user.id);

  query = query.order("created_at", { ascending: false });

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой избранного профиля из базы данных");
  }

  return { data, totalCount: count, role: session.user.user_metadata.role as UserEntity };
};

export const addFavorite = async (id: number | string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  const isCompanyRole = session.user.user_metadata.role === UserEntity.Company;

  const { data: applicationData, error: applicationError } = await supabase
    .from(`${isCompanyRole ? "vacancies" : "resumes"}`)
    .select("*")
    .eq("id", id)
    .single();

  if (applicationError) {
    console.log(applicationError);
    throw new Error(
      `${isCompanyRole ? "Данная вакансия не найдена в базе данных" : "Данное резюме не найдено в базе данных"}`,
    );
  }

  const { data, error } = await supabase.from("favorites").insert({
    user_id: session.user.id,
    [isCompanyRole ? "vacancy_id" : "resume_id"]: applicationData.id,
  });

  if (error) {
    console.log(error);
    throw new Error(`Проблема с добавлением ${isCompanyRole ? "вакансии" : "резюме"} в Избранное`);
  }

  return data;
};

export const deleteFavorite = async (id: number | string) => {
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
    .eq(isCompanyRole ? "vacancy_id" : "resume_id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Избранного");
  }

  return data;
};
