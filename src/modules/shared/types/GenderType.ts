const titles = {
  female: "Женский",
  male: "Мужской",
  _not_set: "Не указан",
};

export const genderTypes = ["female", "male", "_not_set"] as const;

export type GenderType = (typeof genderTypes)[number];

export const getGenderTitle = (value: GenderType) => titles[value];
