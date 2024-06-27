import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

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
