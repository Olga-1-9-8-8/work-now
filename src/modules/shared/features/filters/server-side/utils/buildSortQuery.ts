import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";
import { SortingType } from "../types/SortingType";

export const buildSortQuery = (
  sortArr: SortingType[],
  query: PostgrestFilterBuilder<GenericSchema, Record<string, unknown>, any, unknown, unknown>,
) => {
  let updatedQuery = query;
  sortArr.forEach((sort) => {
    const { column, direction } = sort;
    updatedQuery = query.order(column, { ascending: direction === "asc" });
  });
  return updatedQuery;
};