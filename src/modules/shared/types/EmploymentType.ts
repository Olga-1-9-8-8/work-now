export const employmentTypes = [
  "summer",
  "resort",
  "graduation",
  "volunteer",
  "internship",
  "summerInternship",
  "full",
  "part",
] as const;

export type EmploymentType = (typeof employmentTypes)[number];
