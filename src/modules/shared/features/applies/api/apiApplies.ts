import { getAvatar, getFavorite, ResumeWithProfileApiTypeInput } from "../../../api";
import { VacancyWithProfileApiTypeInput } from "../../../api/types/VacancyApiType";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { supabase } from "../../../services/api/supabase";
import { UserEntity } from "../../../types";

const processItemsWithFavoriteApplyStatusAndDownloadAvatar = async <
  T extends ResumeWithProfileApiTypeInput | VacancyWithProfileApiTypeInput | null,
>(
  items: T[],
  t: (key: string) => string,
) => {
  const filteredItems = items.filter((item) => item !== null);

  return Promise.all(
    filteredItems.map(async (item) => {
      const favorite = await getFavorite(item.id, t);

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

export const getApplies = async (page: number, t: (key: string) => string) => {
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
    throw new Error(t("shared.api.getAppliesError"));
  }

  const appliesData = {
    vacancies: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.vacancies),
      t,
    ),
    resumes: await processItemsWithFavoriteApplyStatusAndDownloadAvatar(
      data.flatMap((item) => item.resumes),
      t,
    ),
  };

  return { data: appliesData, totalCount: count };
};

export const addApply = async (id: number | string, t: (key: string) => string) => {
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
    throw new Error(
      isCompanyRole ? t("shared.api.addApplyResumeError") : t("shared.api.addApplyVacancyError"),
    );
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
        isCompanyRole
          ? t("shared.api.updateApplyResumeError")
          : t("shared.api.updateApplyVacancyError"),
      );
    }
  }

  return { ...applicationData, isCompanyRole };
};

export const deleteApply = async (id: number | string, t: (key: string) => string) => {
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
    throw new Error(t("shared.api.deleteApplyError"));
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
        isCompanyRole
          ? t("shared.api.updateApplyResumeError")
          : t("shared.api.updateApplyVacancyError"),
      );
    }
  }

  return { ...applicationData, isCompanyRole };
};

interface GetUserAppliesParams {
  id: number;
  isHiring: boolean;
  t: (key: string) => string;
}

export const getAllUserApplies = async ({ id, isHiring, t }: GetUserAppliesParams) => {
  const columnName = isHiring ? "vacancy_id" : "resume_id";

  const { data: applies, error: appliesError } = await supabase
    .from("applies")
    .select("created_at,profiles(username,id)")
    .eq(columnName, id);

  if (appliesError) {
    console.error(appliesError);
    throw new Error(t("shared.api.getAllUserAppliesError"));
  }

  return applies;
};
