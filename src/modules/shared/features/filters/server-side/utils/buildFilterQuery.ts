import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";
import { FilterType } from "../types/FilterType";
import { getFilterValue } from "./getFilterValue";

export const buildFilterQuery = (
  filters: FilterType[],
  query: PostgrestFilterBuilder<GenericSchema, Record<string, unknown>, any, unknown, unknown>,
) => {
  let updatedQuery = query;

  filters.forEach((filter) => {
    const { column, operator, value } = filter;

    if (value) {
      if (Array.isArray(value)) {
        switch (operator) {
          case "eq": {
            updatedQuery = query.or(value.map((v) => `${column}.eq.${v}`).join(","));
            break;
          }
          case "ilike": {
            updatedQuery = query.or(value.map((v) => `${column}.ilike.%${v}%`).join(","));
            break;
          }
          case "cs": {
            updatedQuery = query.or(value.map((v) => `${column}.cs.{${v}}`).join(","));
            break;
          }
          default: {
            throw new Error(`Неподдерживаемый оператор: ${operator}`);
          }
        }
      } else if (column === "creation_date") {
        const filterValue = getFilterValue(value, operator);
        updatedQuery = query.or(
          `creation_date.${operator}.${filterValue},updated_at.${operator}.${filterValue}`,
        );
      } else {
        updatedQuery = query.filter(column, operator, getFilterValue(value, operator));
      }
    }
  });
  return updatedQuery;
};
