import { Flame } from "lucide-react";
import { BadgeType } from "../types/BadgeType";

export const getBadgeDataByStartDate = (type?: string | "immediately"): BadgeType => {
  switch (type) {
    case "immediately": {
      return {
        badgeIcon: Flame,
        badgeVariant: "destructive",
        badgeTitle: "Срочно",
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
