import { Laptop } from "lucide-react";
import { ScheduleType } from "../types";
import { BadgeType } from "../types/BadgeType";

export const getBadgeDataByScheduleType = (type?: ScheduleType | string): BadgeType => {
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
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
