/* eslint-disable unicorn/prefer-switch */
import axios from "axios";
import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import {
  FilterType,
  SortingType,
  buildFilterQuery,
  buildSortQuery,
} from "../../../shared/features/filters/server-side";
import { buildPaginationQuery } from "../../../shared/features/filters/server-side/utils/buildPaginationQuery";
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
  sort: SortingType;
  page: number;
}

export const getVacancies = async ({ filters, sort, page }: GetVacanciesProps) => {
  let query = supabase.from("vacancies").select("*,profiles(*)", { count: "exact" });

  if (filters.length > 0) {
    query = buildFilterQuery(filters, query);
  }

  query = buildSortQuery(sort, query);

  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой вакансий из базы данных");
  }

  if (data.length === 0) return { data, totalCount: count };

  const vacanciesData = await Promise.all(
    data.map(async (vacancy) => {
      const [favorite, appliesData] = await Promise.all([
        getFavorite(vacancy.id),
        getApply(vacancy.id),
      ]);

      const avatarPromise = vacancy.profiles?.avatar
        ? getAvatar(vacancy.profiles.avatar)
        : Promise.resolve(null);

      const avatar = await avatarPromise;

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
