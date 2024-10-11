import { LanguageType } from "../configs";
import { WeekHoursType } from "../types";
import { BadgeType } from "../types/BadgeType";

const badgeTitleConfig = {
  ru: {
    "40": "40 часов (8 часов в день)",
    "30": "30 часов (6 часов в день)",
    "20": "20 часов (4 часа в день)",
    "10": "10 часов (2 часа в день)",
  },

  en: {
    "40": "40 hours (8 hours per day)",
    "30": "30 hours (6 hours per day)",
    "20": "20 hours (4 hours per day)",
    "10": "10 hours (2 hours per day)",
  },

  de: {
    "40": "40 Stunden (8 Stunden pro Tag)",
    "30": "30 Stunden (6 Stunden pro Tag)",
    "20": "20 Stunden (4 Stunden pro Tag)",
    "10": "10 Stunden (2 Stunden pro Tag)",
  },
};

export const getBadgeDataByWeekHours = (
  language: LanguageType,
  type?: WeekHoursType,
): BadgeType => {
  switch (type) {
    case "40": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language]["40"],
      };
    }
    case "30": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language]["30"],
      };
    }
    case "20": {
      return {
        badgeVariant: "warning",
        badgeTitle: badgeTitleConfig[language]["20"],
      };
    }
    case "10": {
      return {
        badgeVariant: "warning",
        badgeTitle: badgeTitleConfig[language]["10"],
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
