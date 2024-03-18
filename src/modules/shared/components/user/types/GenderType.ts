const titles = {
  female: "Женский",
  male: "Мужской",
};

const types = ["female", "male"] as const;

export type GenderType = (typeof types)[number];

export const getGenderTitle = (value: GenderType) => titles[value];
