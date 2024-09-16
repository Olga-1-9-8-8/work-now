import { SortingType } from "../../server-side";

export const sortClientData = <T extends Record<string, any>>(sort: SortingType, data: T[]) => {
  const modifier = sort.direction === "asc" ? 1 : -1;

  return data.sort((a, b) => (a[sort.column] - b.salary[sort.column]) * modifier);
};
