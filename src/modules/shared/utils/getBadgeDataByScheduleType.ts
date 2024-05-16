import { Laptop } from "lucide-react";
import { ScheduleType, WeekHoursType } from "../types";
import { BadgeType } from "../types/BadgeType";

export const getBadgeDataByScheduleType = (type?: ScheduleType | WeekHoursType): BadgeType => {
  switch (type) {
    case "fullDay": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "Полный день",
      };
    }
    case "scheduleShift": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "Сменный график",
      };
    }
    case "flexible": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "Гибкий график",
      };
    }
    case "remote": {
      return {
        badgeIcon: Laptop,
        badgeVariant: "success",
        badgeTitle: "Удаленная работа",
      };
    }
    case "40": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "40 часов (8 часов в день)",
      };
    }
    case "20": {
      return {
        badgeVariant: "warning",
        badgeTitle: "20 часов (4 часа в день)",
      };
    }
    case "10": {
      return {
        badgeVariant: "warning",
        badgeTitle: "10 часов (2 часа в день)",
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
