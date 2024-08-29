import { WeekHoursType } from "../types";
import { BadgeType } from "../types/BadgeType";

export const getBadgeDataByWeekHours = (type?: WeekHoursType): BadgeType => {
  switch (type) {
    case "40": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "40 часов (8 часов в день)",
      };
    }
    case "30": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "30 часов (6 часов в день)",
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
