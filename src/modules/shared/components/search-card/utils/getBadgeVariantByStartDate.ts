import { Flame } from "lucide-react";

import { BadgeType } from "../types/BadgeType";

export const getBadgeVariantByStartDate = (type?: string | "immediately"): BadgeType => {
  switch (type) {
    case "immediately": {
      return {
        badgeIcon: Flame,
        badgeVariant: "destructive",
        badgeTitle: "Как можно скорее",
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
