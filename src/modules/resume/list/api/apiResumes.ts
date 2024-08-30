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

interface GetResumesProps {
  filters: FilterType[];
  sortArr: SortingType[];
  page: number;
}

export const getResumes = async ({ filters, sortArr, page }: GetResumesProps) => {
  let query = supabase.from("resumes").select("*,profiles(*)", { count: "exact" });

  if (filters.length > 0) {
    query = buildFilterQuery(filters, query);
  }
  if (sortArr.length > 0) {
    query = buildSortQuery(sortArr, query);
  }
  if (page) {
    query = buildPaginationQuery(page, query);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Проблема с загрузкой резюме из базы данных");
  }

  if (data.length === 0) return { data, totalCount: count };

  const resumesData = await Promise.all(
    data.map(async (resume) => {
      const [favorite, appliesData] = await Promise.all([
        getFavorite(resume.id),
        getApply(resume.id),
      ]);

      const avatarPromise = resume.profiles?.avatar
        ? getAvatar(resume.profiles.avatar)
        : Promise.resolve(null);

      const avatar = await avatarPromise;

      return {
        ...resume,
        isInFavorites: !!favorite,
        isInApplies: !!appliesData,
        profiles: resume.profiles ? { ...resume.profiles, avatar } : null,
      };
    }),
  );

  return { data: resumesData, totalCount: count };
};
