import { BadgeDollarSign, BadgeEuro, BadgeRussianRuble } from "lucide-react";

export const currencyConfigs = {
  ru: {
    title: " ₽",
    icon: BadgeRussianRuble,
    currency: "RUB",
  },
  en: {
    title: " $",
    icon: BadgeDollarSign,
    currency: "USD",
  },
  de: {
    title: " €",
    icon: BadgeEuro,
    currency: "EUR",
  },
};
