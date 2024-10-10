import { de, enUS, ru } from "date-fns/locale";
import { LanguageType } from "../configs";

export const getLocale = (language: LanguageType) => {
  switch (language) {
    case "en": {
      return enUS;
    }
    case "de": {
      return de;
    }
    case "ru": {
      return ru;
    }
    default: {
      return enUS;
    }
  }
};
