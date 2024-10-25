import { LanguageType } from "../../../configs";

export const cityTypes = ["cities_de", "cities_en", "cities_ru"] as const;

export type CityType = (typeof cityTypes)[number];

export const languageMap: Record<CityType, LanguageType> = {
  cities_de: "de",
  cities_en: "en",
  cities_ru: "ru",
};
