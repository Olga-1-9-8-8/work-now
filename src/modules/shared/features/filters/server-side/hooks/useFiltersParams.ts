import { useMemo } from "react";
import { useUrl } from "../../../../hooks";
import { getDateFromUrlString } from "../../../../utils/helpers";
import { FilterType } from "../types/FilterType";
import { SortingType } from "../types/SortingType";

const operatorsSupabase = {
  education: "eq",
  employment: "cs",
  schedule: "cs",
  week_hours: "cs",
  creation_date: "gte",
  position: "ilike",
  cities: "cs",
  username: "ilike",
};

interface FilterParams {
  filters: FilterType[];
  sort: SortingType;
  page: number;
}

export const useFiltersParams = () => {
  const { getParam, getAllParams } = useUrl();

  return useMemo(() => {
    const params: FilterParams = {
      page: 1,
      sort: { column: "creation_date", direction: "desc" },
      filters: [],
    };
    getAllParams().forEach(([key, value]) => {
      if (key === "offset") {
        params.page = Number(getParam("offset"));
      } else if (key === "sort") {
        const [column, direction] = value.split("-");

        params.sort = { column, direction: direction as "asc" | "desc" };
      } else {
        const operator = operatorsSupabase[key as keyof typeof operatorsSupabase] || "eq";

        const isDateDiapason = key === "creation_date";

        params.filters?.push({
          column: key,
          operator: operator || "eq",
          value: isDateDiapason ? getDateFromUrlString(value) : value.split(","),
        });
      }
    });

    return params;
  }, [getAllParams, getParam]);
};
