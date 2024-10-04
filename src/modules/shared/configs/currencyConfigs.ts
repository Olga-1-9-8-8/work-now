import { BadgeDollarSign, BadgeEuro, BadgeRussianRuble } from "lucide-react";

export const currencyConfigs = {
  ru: {
    title: " руб.",
    icon: BadgeRussianRuble,
    currency: "RUB",
  },
  en: {
    title: " dol.",
    icon: BadgeDollarSign,
    currency: "USD",
  },

  de: {
    title: " euro",
    icon: BadgeEuro,
    currency: "EUR",
  },
};
