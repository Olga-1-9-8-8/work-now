import axios from "axios";
import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import {
  FilterType,
  SortingType,
  getFilterValue,
} from "../../../shared/features/filters/server-side";
import { supabase } from "../../../shared/services";
import { API_URL } from "../../shared/api/const";

export const getVacanciesThirdPartApi = async (param: any, segments: string = "/region/code") => {
  const result = await axios({
    method: "get",
    url: `${API_URL}${segments}`,
    params: {
      limit: 30,
      offset: 1,
      text: "",
      ...param,
    },
  });

  const data = await result.data;
  return data.results.vacancies;
};

interface GetVacanciesProps {
  filters: FilterType[];
  sortArr: SortingType[];
  page: number;
}

export const getVacancies = async ({ filters, sortArr, page }: GetVacanciesProps) => {
  let query = supabase.from("vacancies").select("*,profiles(*)", { count: "exact" });
  if (filters.length > 0) {
    filters.forEach((filter) => {
      const { column, operator, value } = filter;

      if (value) {
        query =
          Array.isArray(value) && operator === "ilike"
            ? query.or(value.map((v) => `${column}.ilike.%${v}%`).join(","))
            : query.filter(column, operator, getFilterValue(value, operator));
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
    throw new Error("Проблема с загрузкой вакансий из базы данных");
  }

  if (data.length === 0) return { data, totalCount: count };

  const vacanciesData = await Promise.all(
    data.map(async (vacancy) => {
      const favorite = await getFavorite(vacancy.id);
      const appliesData = await getApply(vacancy.id);

      const avatar = vacancy.profiles?.avatar ? await getAvatar(vacancy.profiles.avatar) : null;

      return {
        ...vacancy,
        isInFavorites: !!favorite,
        isInApplies: !!appliesData,
        profiles: vacancy.profiles ? { ...vacancy.profiles, avatar } : null,
      };
    }),
  );

  return { data: vacanciesData, totalCount: count };
};
