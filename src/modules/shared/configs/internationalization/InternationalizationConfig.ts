import { ElementType } from "react";
import { DeFlag, EnFlag, RuFlag } from "../../ui/icons";

export const languages = ["ru", "en", "de"] as const;

export type LanguageType = (typeof languages)[number];

export interface LanguageItemOption {
  title: Record<LanguageType, string>;
  value: LanguageType;
  icon: ElementType;
}

export const InternationalizationConfig: LanguageItemOption[] = [
  {
    title: {
      en: "English speaking markets",
      ru: "Англоязычные рынки",
      de: "Englischsprachige Märkte",
    },
    value: "en",
    icon: EnFlag,
  },
  {
    title: {
      en: "Russian speaking markets",
      ru: "Русскоязычные рынки",
      de: "Russischsprachige Märkte",
    },
    value: "ru",
    icon: RuFlag,
  },
  {
    title: {
      en: "German speaking markets",
      ru: "Немецкоязычные рынки",
      de: "Deutschsprachige Märkte",
    },
    value: "de",
    icon: DeFlag,
  },
];
