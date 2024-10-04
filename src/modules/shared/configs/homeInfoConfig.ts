import { LanguageType } from "./internationalization/InternationalizationConfig";

export type HomeInfoPricing = string[];

export const homeInfoPricingConfig: Record<LanguageType, HomeInfoPricing> = {
  ru: [
    "Неограниченный поиск",
    "Неограниченное количество откликов",
    "Личная доска аналитики",
    "Круглосуточная Поддержка",
    "Доступ к обширной базе соискателей",
    "Доступ к личному кабинету",
  ],
  en: [
    "Unlimited search",
    "Unlimited number of responses",
    "Personal analytics board",
    "24/7 support",
    "Access to an extensive candidate database",
    "Access to your personal account",
  ],
  de: [
    "Unbegrenzte Suche",
    "Unbegrenzte Anzahl von Antworten",
    "Persönlicher Beratungsboard",
    "24/7-Support",
    "Zugriff auf eine umfangreiche Kandidatendatenbank",
    "Zugang zum privaten Konto",
  ],
};
