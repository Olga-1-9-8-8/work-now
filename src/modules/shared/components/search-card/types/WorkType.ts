export const workTypes = [
  "summer",
  "resort",
  "graduation",
  "volunteer",
  "internship",
  "default",
] as const;

export type WorkType = (typeof workTypes)[number];
