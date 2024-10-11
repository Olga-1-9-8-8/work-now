import { Laptop } from "lucide-react";
import { LanguageType } from "../configs";
import { ScheduleType } from "../types";
import { BadgeType } from "../types/BadgeType";

const badgeTitleConfig = {
  ru: {
    fullDay: "Полный день",
    scheduleShift: "Сменный график",
    flexible: "Гибкий график",
    remote: "Удаленная работа",
  },

  en: {
    fullDay: "Full day",
    scheduleShift: "Schedule shift",
    flexible: "Flexible schedule",
    remote: "Remote work",
  },

  de: {
    fullDay: "Vollzeit",
    scheduleShift: "Schichtarbeit",
    flexible: "Gleitzeit",
    remote: "Fernarbeit",
  },
};

export const getBadgeDataByScheduleType = (
  language: LanguageType,
  type?: ScheduleType | string,
): BadgeType => {
  switch (type) {
    case "fullDay": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].fullDay,
      };
    }
    case "scheduleShift": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].scheduleShift,
      };
    }
    case "flexible": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].flexible,
      };
    }
    case "remote": {
      return {
        badgeIcon: Laptop,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].remote,
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
