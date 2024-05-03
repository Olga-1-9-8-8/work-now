export const languages = ["ru", "en"] as const;

export type LanguageType = (typeof languages)[number];

export interface LanguageItemOption {
  title: string;
  value: LanguageType;
}

export const InternationalizationConfig: LanguageItemOption[] = [
  {
    title: "Русский",
    value: "ru",
  },
  {
    title: "Английский",
    value: "en",
  },
];
