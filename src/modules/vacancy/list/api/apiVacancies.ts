import { LanguageType } from "../../../shared/configs";
import {
  FilterType,
  SortingType,
  buildFilterQuery,
  buildSortQuery,
} from "../../../shared/features/filters/server-side";
import { buildPaginationQuery } from "../../../shared/features/filters/server-side/utils/buildPaginationQuery";
import { supabase } from "../../../shared/services/supabase";

interface GetVacanciesProps {
  filters: FilterType[];
  sort: SortingType;
  page: number;
  t: (key: string) => string;
  language: string;
}

export const getVacancies = async ({ filters, sort, page, t, language }: GetVacanciesProps) => {
  let query = supabase
    .from("vacancies")
    .select("*,profiles(*)", { count: "exact" })
    .not(`cities_${language}`, "is", null);

  if (filters.length > 0) {
    query = buildFilterQuery(filters, query, language as LanguageType);
  }

  query = buildSortQuery(sort, query);

  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(t("vacancy.api.getVacanciesError"));
  }

  if (data.length === 0) return { data, totalCount: count };

  const vacanciesData = await Promise.all(
    data.map(async (vacancy) => {
      return {
        ...vacancy,
        profiles: vacancy.profiles ? { ...vacancy.profiles } : null,
      };
    }),
  );

  return { data: vacanciesData, totalCount: count };
};
