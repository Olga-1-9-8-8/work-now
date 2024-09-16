export const sortTypes = [
  "creationDate-desc",
  "salary-desc",
  "salary-asc",
  "position-asc",
  "position-desc",
] as const;

export type SortType = (typeof sortTypes)[number];
