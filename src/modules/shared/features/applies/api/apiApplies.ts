import { ResumeWithProfileApiTypeInput } from "../../../../resume/shared/types";
import { VacancyWithProfileApiTypeInput } from "../../../../vacancy/shared/types/api/VacancyApiType";
import { getAvatar, getFavorite } from "../../../api";
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

      const profiles = {
        ...item.profiles,
        avatar: item.profiles?.avatar ? await getAvatar(item.profiles.avatar) : null,
      };

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
