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
  sort: SortingType;
  page: number;
  t: (key: string) => string;
}

export const getResumes = async ({ filters, sort, page, t }: GetResumesProps) => {
  let query = supabase.from("resumes").select("*,profiles(*)", { count: "exact" });

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
    throw new Error(t("resume.api.getResumesError"));
  }

  if (data.length === 0) return { data, totalCount: count };

  const resumesData = await Promise.all(
    data.map(async (resume) => {
      const [favorite, appliesData] = await Promise.all([
        getFavorite(resume.id, t),
        getApply(resume.id, t),
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
