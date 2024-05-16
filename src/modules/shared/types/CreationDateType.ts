export const creationDateTypes = [
  "allTime",
  "lastDay",
  "lastTwoDays",
  "lastThreeDays",
  "lastWeek",
  "lastMonth",
] as const;

export type CreationDateType = (typeof creationDateTypes)[number];
