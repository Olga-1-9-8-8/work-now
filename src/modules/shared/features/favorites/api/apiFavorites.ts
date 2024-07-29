import { getApply, getAvatar, ResumeWithProfileApiTypeInput } from "../../../api";
import { VacancyWithProfileApiTypeInput } from "../../../api/types/VacancyApiType";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

const processItemsWithFavoriteApplyStatusAndDownloadAvatar = async (
  items: (ResumeWithProfileApiTypeInput | VacancyWithProfileApiTypeInput | null)[],
) => {
  const filteredItems = items.filter((item) => item !== null);

  return Promise.all(
    filteredItems.map(async (item) => {
      const applies = await getApply(item.id);
      const profiles = item.profiles
        ? {
            ...item.profiles,
            avatar: item.profiles?.avatar ? await getAvatar(item.profiles.avatar) : null,
          }
        : null;

      return {
        ...item,
        isInFavorites: true,
        isInApplies: !!applies,
        profiles,
      };
    }),
  );
};

export const getFavorites = async (page: number) => {
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
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой избранного из базы данных");
  }

  const favoritesData = {
    vacancies: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.vacancies),
    ),
    resumes: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.resumes),
    ),
  };

  return { data: favoritesData, totalCount: count };
};

export const addFavorite = async (id: number | string) => {
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
      `Проблема с добавлением ${isCompanyRole ? "резюме" : " вакансии "} в Избранное`,
    );
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  return { ...applicationData, isCompanyRole };
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
    .eq(isCompanyRole ? "resume_id" : "vacancy_id", id)
    .select("resumes(*),vacancies(*)")
    .single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Избранного");
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  return { ...applicationData, isCompanyRole };
};
