export const sortTypes = [
  "creation_date-desc",
  "salary-desc",
  "salary-asc",
  "position-asc",
  "position-desc",
] as const;

export type SortType = (typeof sortTypes)[number];
