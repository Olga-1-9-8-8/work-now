import { useUrl } from "../../../../hooks";
import { getDateFromUrlString } from "../../../../utils/helpers";
import { FilterType } from "../types/FilterType";
import { SortingType } from "../types/SortingType";

export const useFiltersParams = () => {
  const operatorsSupabase = {
    education: "eq",
    employment: "cs",
    schedule: "cs",
    weekHours: "cs",
    creation_date: "gte",
    position: "ilike",
    city: "in",
  };

  const { getParam, getAllParams } = useUrl();

  const params: {
    filters: FilterType[];
    sortArr: SortingType[];
    page: number;
  } = {
    page: 1,
    sortArr: [{ column: "creation_date", direction: "desc" }],
    filters: [],
  };

  getAllParams().forEach(([key, value]) => {
    if (key === "offset") {
      params.page = Number(getParam("offset"));
    } else if (key === "sort") {
      const [column, direction] = value.split("-");

      params.sortArr.push({ column, direction: direction as "asc" | "desc" });
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
};
