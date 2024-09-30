/* eslint-disable unicorn/prefer-ternary */
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";
import { SortingType } from "../types/SortingType";

export const buildSortQuery = (
  sort: SortingType,
  query: PostgrestFilterBuilder<GenericSchema, Record<string, unknown>, any, unknown, unknown>,
) => {
  let updatedQuery = query;

  const { column, direction } = sort;
  if (column === "salary") {
    updatedQuery = updatedQuery.not("salary", "is", null);
  }

  updatedQuery = updatedQuery.order(column, { ascending: direction === "asc" });

  return updatedQuery;
};
