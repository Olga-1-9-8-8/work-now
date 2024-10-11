export const languages = ["ru", "en", "de"] as const;

export type LanguageType = (typeof languages)[number];

export interface LanguageItemOption {
  title: Record<LanguageType, string>;
  value: LanguageType;
}

export const InternationalizationConfig: LanguageItemOption[] = [
  {
    title: {
      en: "English",
      ru: "Английский",
      de: "Englisch",
    },
    value: "en",
  },
  {
    title: {
      en: "Russian",
      ru: "Русский",
      de: "Russisch",
    },
    value: "ru",
  },
  {
    title: {
      en: "German",
      ru: "Немецкий",
      de: "Deutsch",
    },
    value: "de",
  },
];
