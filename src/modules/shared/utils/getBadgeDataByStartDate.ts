import { Flame } from "lucide-react";
import { LanguageType } from "../configs";
import { BadgeType } from "../types/BadgeType";

const badgeTitleConfig = {
  ru: {
    immediately: "Срочно",
  },

  en: {
    immediately: "Immediately",
  },

  de: {
    immediately: "Sofort",
  },
};

export const getBadgeDataByStartDate = (
  language: LanguageType,
  type?: string | "immediately",
): BadgeType => {
  switch (type) {
    case "immediately": {
      return {
        badgeIcon: Flame,
        badgeVariant: "destructive",
        badgeTitle: badgeTitleConfig[language].immediately,
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
