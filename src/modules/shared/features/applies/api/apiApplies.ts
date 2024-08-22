import { getAvatar, getFavorite, ResumeWithProfileApiTypeInput } from "../../../api";
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
      const favorite = await getFavorite(item.id);

      const profiles = item.profiles
        ? {
            ...item.profiles,
            avatar: item.profiles?.avatar ? await getAvatar(item.profiles.avatar) : null,
          }
        : null;

      return {
        ...item,
        isInFavorites: !!favorite,
        isInApplies: true,
        profiles,
      };
    }),
  );
};

export const getApplies = async (page: number) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }
  let query = supabase
    .from("applies")
    .select("*,resumes(*,profiles(*)),vacancies(*,profiles(*))", {
      count: "exact",
    })
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
    throw new Error("Проблема с загрузкой откликов из базы данных");
  }

  const appliesData = {
    vacancies: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.vacancies),
    ),
    resumes: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.resumes),
    ),
  };

  return { data: appliesData, totalCount: count };
};

export const addApply = async (id: number | string) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const isCompanyRole = session.user.user_metadata.role === UserEntity.Company;

  const { data, error } = await supabase
    .from("applies")
    .insert({
      user_id: session.user.id,
      [isCompanyRole ? "resume_id" : "vacancy_id"]: id,
    })
    .select("resumes(*),vacancies(*)")
    .single();

  if (error) {
    console.log(error);
    throw new Error(`Проблема с добавлением ${isCompanyRole ? "резюме " : "вакансии"} в Отклики`);
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  if (applicationData) {
    const { error: applicationUpdateError } = await supabase
      .from(`${isCompanyRole ? "resumes" : "vacancies"}`)
      .update({
        ...applicationData,
        applicants_quantity: applicationData.applicants_quantity + 1,
      })
      .eq("id", applicationData.id)
      .single();

    if (applicationUpdateError) {
      console.log(applicationUpdateError);
      throw new Error(
        `Ошибка при обновлении ${isCompanyRole ? "резюме" : "вакансии"}, после отклика`,
      );
    }
  }

  return { ...applicationData, isCompanyRole };
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
    .eq(isCompanyRole ? "resume_id" : "vacancy_id", id)
    .select("resumes(*),vacancies(*)")
    .single();

  if (error) {
    console.log(error);
    throw new Error("Ошибка удаления элемента из Откликов");
  }

  const applicationData = isCompanyRole ? data.resumes : data.vacancies;

  if (applicationData) {
    const { error: applicationUpdateError } = await supabase
      .from(`${isCompanyRole ? "resumes" : "vacancies"}`)
      .update({
        ...applicationData,
        applicants_quantity: applicationData.applicants_quantity - 1,
      })
      .eq("id", applicationData.id)
      .single();

    if (applicationUpdateError) {
      console.log(applicationUpdateError);
      throw new Error(
        `Ошибка при обновлении ${isCompanyRole ? "резюме" : "вакансии"}, после отклика`,
      );
    }
  }

  return { ...applicationData, isCompanyRole };
};

interface GetUserAppliesParams {
  id: number;
  isHiring: boolean;
}

export const getAllUserApplies = async ({ id, isHiring }: GetUserAppliesParams) => {
  const columnName = isHiring ? "vacancy_id" : "resume_id";

  const { data: applies, error: appliesError } = await supabase
    .from("applies")
    .select("created_at,profiles(username,id)")
    .eq(columnName, id);

  if (appliesError) {
    console.error(appliesError);
    throw new Error("Ошибка при получении просмотров");
  }

  return applies;
};
