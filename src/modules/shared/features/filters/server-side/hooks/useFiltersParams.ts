import { ResumesFilterType } from "../../../../../resume/list/types/ResumesFilterType";
import { ResumesSortingType } from "../../../../../resume/list/types/ResumesSortingType";
import { useUrl } from "../../../../hooks";
import { getDateFromUrlString } from "../../../../utils/helpers";

export const useFiltersParams = () => {
  const operatorsSupabase = {
    education: "eq",
    employment: "cs",
    schedule: "cs",
    weekHours: "cs",
    creationDate: "gte",
    position: "in",
    city: "in",
  };

  const { getParam, getAllParams } = useUrl();

  const params: {
    filters: ResumesFilterType[];
    sortArr: ResumesSortingType[];
    page: number;
  } = {
    page: 1,
    sortArr: [{ column: "creationDate", direction: "desc" }],
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

      const isDateDiapason = key === "creationDate";

      params.filters?.push({
        column: key,
        operator: operator || "eq",
        value: isDateDiapason ? getDateFromUrlString(value) : value.split(","),
      });
    }
  });

  return params;
};
