import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";
import { LanguageType } from "../../../../configs";
import { FilterType } from "../types/FilterType";
import { getFilterValue } from "./getFilterValue";

export const buildFilterQuery = (
  filters: FilterType[],
  query: PostgrestFilterBuilder<GenericSchema, Record<string, unknown>, any, unknown, unknown>,
  language: LanguageType,
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
            if (column === "username") {
              updatedQuery = query.or(value.map((v) => `${column}.ilike.%${v}%`).join(","), {
                foreignTable: "profiles",
              });
              updatedQuery = updatedQuery.not("profiles", "is", null);

              break;
            }
            updatedQuery = query.or(value.map((v) => `${column}.ilike.%${v}%`).join(","));
            break;
          }
          case "cs": {
            if (column === "cities") {
              updatedQuery = query.or(
                value.map((v) => `${column}_${language}.cs.{${v}}`).join(","),
              );
              break;
            }

            updatedQuery = query.or(value.map((v) => `${column}.cs.{${v}}`).join(","));
            break;
          }
          default: {
            throw new Error(`Unsupported operator: ${operator}`);
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
