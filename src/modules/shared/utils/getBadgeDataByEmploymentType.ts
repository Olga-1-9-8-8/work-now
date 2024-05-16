import { Building2, GraduationCap, HandHeart, Ship, SunMedium } from "lucide-react";
import { EmploymentType } from "../types";
import { BadgeType } from "../types/BadgeType";

export const getBadgeDataByEmploymentType = (type?: EmploymentType): BadgeType => {
  switch (type) {
    case "full": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "Полная занятость",
      };
    }
    case "part": {
      return {
        badgeVariant: "secondary",
        badgeTitle: "Неполная занятость",
      };
    }
    case "internship": {
      return {
        badgeIcon: Building2,
        badgeVariant: "secondary",
        badgeTitle: "Стажировка",
      };
    }
    case "summer": {
      return {
        badgeIcon: SunMedium,
        badgeVariant: "success",
        badgeTitle: "Работа на лето",
      };
    }
    case "summerInternship": {
      return {
        badgeIcon: SunMedium,
        badgeVariant: "success",
        badgeTitle: "Летняя стажировка",
      };
    }
    case "resort": {
      return {
        badgeIcon: Ship,
        badgeVariant: "success",
        badgeTitle: "Работа на курорте",
      };
    }
    case "graduation": {
      return {
        badgeIcon: GraduationCap,
        badgeVariant: "success",
        badgeTitle: "Работа для выпускников",
      };
    }
    case "volunteer": {
      return {
        badgeIcon: HandHeart,
        badgeVariant: "success",
        badgeTitle: "Волонтерство",
      };
    }

    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
