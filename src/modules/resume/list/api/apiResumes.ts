import { format } from "date-fns";
import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { getFilterValue } from "../../../shared/features/filters/server-side/utils/getFilterValue";
import { supabase } from "../../../shared/services/api/supabase";
import { ResumesFilterType } from "../types/ResumesFilterType";
import { ResumesSortingType } from "../types/ResumesSortingType";

interface GetResumesProps {
  filters: ResumesFilterType[];
  sortArr: ResumesSortingType[];
  page: number;
}

export const getResumes = async ({ filters, sortArr, page }: GetResumesProps) => {
  let query = supabase.from("resumes").select("*,profiles(*)", { count: "exact" });
  if (filters.length > 0) {
    filters.forEach((filter) => {
      const { column, operator, value } = filter;

      if (value) {
        query = query.filter(column, operator, getFilterValue(value, operator));
      }
    });
  }

  if (sortArr.length > 0) {
    sortArr.forEach((sort) => {
      const { column, direction } = sort;
      query = query.order(column, { ascending: direction === "asc" });
    });
  }

  if (page) {
    const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
    const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  if (data.length === 0) return { data, totalCount: count };

  const resumesData = await Promise.all(
    data.map(async (resume) => {
      const favorite = await getFavorite(resume.id);
      const appliesData = await getApply(resume.id);
      const avatar = resume.profiles?.avatar ? await getAvatar(resume.profiles.avatar) : null;

      return {
        ...resume,
        isInFavorites: !!favorite,
        isInApplies: !!appliesData,
        profiles: { ...resume.profiles, avatar },
      };
    }),
  );

  return { data: resumesData, totalCount: count };
};

export const getResumesAfterDate = async (date: string) => {
  const { data, error } = await supabase
    .from("resumes")
    .select("creation_date, salary, education, applicants_quantity, profiles(age, gender)")
    .gte("creation_date", date)
    .lte("creation_date", format(new Date(), "yyyy-MM-dd"));

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  return data;
};
