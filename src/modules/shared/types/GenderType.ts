import { LanguageType } from "../configs/internationalization/InternationalizationConfig";

const titles = {
  female: {
    ru: "Женский",
    de: "Weiblich",
    en: "Female",
  },
  male: {
    ru: "Мужской",
    de: "Männlich",
    en: "Male",
  },
  _not_set: {
    ru: "Не указан",
    de: "Nicht angegeben",
    en: "Not set",
  },
};

export const genderTypes = ["female", "male", "_not_set"] as const;

export type GenderType = (typeof genderTypes)[number];

export const getGenderTitle = (value: GenderType, language: LanguageType) =>
  titles[value][language];
