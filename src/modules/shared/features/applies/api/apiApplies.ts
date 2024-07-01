import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

export const getApplies = async (page: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  let query = supabase
    .from("applies")
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
    throw new Error("Проблема с загрузкой откликов на резюме из базы данных");
  }
  return { data, totalCount: count, role: session.user.user_metadata.role as UserEntity };
};

export const addApply = async (id: number | string) => {
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

  const { data, error } = await supabase.from("applies").insert({
    user_id: session.user.id,
    [isCompanyRole ? "vacancy_id" : "resume_id"]: applicationData.id,
  });

  if (error) {
    console.log(error);
    throw new Error(`Проблема с добавлением ${isCompanyRole ? "вакансии" : "резюме"} в Отклики`);
  }

  const { error: applicationUpdateError } = await supabase
    .from(`${isCompanyRole ? "vacancies" : "resumes"}`)
    .update({ ...applicationData, applicants_quantity: applicationData.applicants_quantity + 1 })
    .eq("id", applicationData.id)
    .single();

  if (applicationUpdateError) {
    console.log(applicationUpdateError);
    throw new Error(
      `Ошибка при обновлении ${isCompanyRole ? "вакансии" : "резюме"} , после отклика`,
    );
  }

  return data;
};

export const deleteApply = async (id: number | string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const isCompanyRole = session.user.user_metadata.role === UserEntity.Company;

  const { data, error } = await supabase
    .from("applies")
    .delete()
    .eq("user_id", session.user.id)
    .eq(isCompanyRole ? "vacancy_id" : "resume_id", id);

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Откликов");
  }

  return data;
};
