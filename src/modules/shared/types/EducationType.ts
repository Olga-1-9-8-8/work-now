export const educationTypes = [
  "secondary",
  "secondarySpecial",
  "higherUnfinished",
  "higher",
] as const;

export type EducationType = (typeof educationTypes)[number];
