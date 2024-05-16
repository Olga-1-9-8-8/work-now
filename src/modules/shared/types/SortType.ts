export const sortTypes = ["creationDate-desc", "salary-desc", "salary-asc"] as const;

export type SortType = (typeof sortTypes)[number];
