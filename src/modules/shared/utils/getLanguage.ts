import { LanguageType } from "../configs";
import { languageMap } from "../widgets/languages-switcher/types/LanguageMap";

export const getLanguage = <
  T extends { cities_de: string[] | null; cities_en: string[] | null; cities_ru: string[] | null },
>(
  item: T,
): LanguageType => {
  if (item.cities_de) {
    return languageMap.cities_de;
  }
  if (item.cities_en) {
    return languageMap.cities_en;
  }
  if (item.cities_ru) {
    return languageMap.cities_ru;
  }

  return "en";
};
