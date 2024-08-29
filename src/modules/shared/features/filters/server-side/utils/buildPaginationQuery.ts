import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { GenericSchema } from "@supabase/supabase-js/dist/module/lib/types";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../../components/pagination";

export const buildPaginationQuery = (
  page: number,
  query: PostgrestFilterBuilder<GenericSchema, Record<string, unknown>, any, unknown, unknown>,
) => {
  const from = (page - 1) * QUANTITY_OF_ITEMS_ON_ONE_PAGE;
  const to = from + QUANTITY_OF_ITEMS_ON_ONE_PAGE - 1;
  return query.range(from, to);
};
