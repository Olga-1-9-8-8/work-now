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

interface FavoriteProps {
  id: number | string;
  role: UserEntity;
}

export const addFavorite = async ({ id, role }: FavoriteProps) => {
  const isCompanyRole = role === UserEntity.Company;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const column = isCompanyRole ? "vacancies" : "resumes";

  const { data: applicationData, error: applicationError } = await supabase
    .from(column)
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

export const deleteFavorite = async ({ id, role }: FavoriteProps) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const isCompanyRole = role === UserEntity.Company;
  const column = isCompanyRole ? "vacancy_id" : "resume_id";
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("user_id", session.user.id)
    .eq(column, id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Избранного");
  }

  return data;
};

export const getFavorite = async (id: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const { data: favoriteData, error: favoriteError } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", session.user.id)
    .eq("resume_id", id)
    .maybeSingle();

  if (favoriteError) {
    console.log(favoriteError);
    throw new Error("Проблема с загрузкой избранного из базы данных");
  }
  return favoriteData;
};
