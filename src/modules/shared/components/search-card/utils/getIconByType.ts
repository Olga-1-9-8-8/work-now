import { VariantProps } from "class-variance-authority";
import { Building2, GraduationCap, HandHeart, Ship, SunMedium } from "lucide-react";
import { ElementType } from "react";
import { badgeVariants } from "../../../ui/badge/Badge";
import { WorkType } from "../types/WorkType";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface BadgeType {
  badgeIcon?: ElementType;
  badgeVariant: BadgeVariant;
}

export const getIconByType = (type?: WorkType): BadgeType => {
  switch (type) {
    case "summer": {
      return {
        badgeIcon: SunMedium,
        badgeVariant: "success",
      };
    }
    case "resort": {
      return {
        badgeIcon: Ship,
        badgeVariant: "success",
      };
    }
    case "graduation": {
      return {
        badgeIcon: GraduationCap,
        badgeVariant: "success",
      };
    }
    case "volunteer": {
      return {
        badgeIcon: HandHeart,
        badgeVariant: "success",
      };
    }
    case "internship": {
      return {
        badgeIcon: Building2,
        badgeVariant: "success",
      };
    }
    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
