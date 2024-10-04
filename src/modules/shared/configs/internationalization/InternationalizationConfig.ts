export const languages = ["ru", "en", "de"] as const;

export type LanguageType = (typeof languages)[number];

export interface LanguageItemOption {
  title: string;
  value: LanguageType;
}

export const InternationalizationConfig: LanguageItemOption[] = [
  {
    title: "Английский",
    value: "en",
  },
  {
    title: "Русский",
    value: "ru",
  },
  {
    title: "Немецкий",
    value: "de",
  },
];
