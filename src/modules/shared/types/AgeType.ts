import { LanguageType } from "../configs/internationalization/InternationalizationConfig";

const titles = {
  young: {
    ru: "от 14-17 лет",
    de: "14-17 Jahre",
    en: "14-17 years old",
  },
  youngAdults: {
    ru: "от 18-35 лет",
    de: "18-35 Jahre",
    en: "18-35 years old",
  },
  adults: {
    ru: "от 36-50 лет",
    de: "36-50 Jahre",
    en: "36-50 years old",
  },
  middleAge: {
    ru: "от 51-67 лет",
    de: "51-67 Jahre",
    en: "51-67 years old",
  },
  olderAge: {
    ru: "от 68-90 лет",
    de: "68-90 Jahre",
    en: "68-90 years old",
  },
};

export const ageTypes = ["young", "youngAdults", "adults", "middleAge", "olderAge"] as const;

export type AgeType = (typeof ageTypes)[number];

export const getAgeTitle = (value: AgeType, language: LanguageType) => titles[value][language];

export const getAgeValue = (value: number) => {
  if (value <= 17) return "young";
  if (value <= 35) return "youngAdults";
  if (value <= 50) return "adults";
  if (value <= 67) return "middleAge";
  return "olderAge";
};
