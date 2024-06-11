const titles = {
  female: "Женский",
  male: "Мужской",
};

export const genderTypes = ["female", "male"] as const;

export type GenderType = (typeof genderTypes)[number];

export const getGenderTitle = (value: GenderType) => titles[value];
