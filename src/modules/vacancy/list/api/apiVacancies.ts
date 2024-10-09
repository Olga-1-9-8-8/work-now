/* eslint-disable unicorn/prefer-switch */
import { getApply, getAvatar, getFavorite } from "../../../shared/api";
import {
  FilterType,
  SortingType,
  buildFilterQuery,
  buildSortQuery,
} from "../../../shared/features/filters/server-side";
import { buildPaginationQuery } from "../../../shared/features/filters/server-side/utils/buildPaginationQuery";
import { supabase } from "../../../shared/services";

interface GetVacanciesProps {
  filters: FilterType[];
  sort: SortingType;
  page: number;
  t: (key: string) => string;
}

export const getVacancies = async ({ filters, sort, page, t }: GetVacanciesProps) => {
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
    throw new Error(t("vacancy.api.getVacanciesError"));
  }

  if (data.length === 0) return { data, totalCount: count };

  const vacanciesData = await Promise.all(
    data.map(async (vacancy) => {
      const [favorite, appliesData] = await Promise.all([
        getFavorite(vacancy.id, t),
        getApply(vacancy.id, t),
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
