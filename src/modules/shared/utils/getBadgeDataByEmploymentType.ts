import { Building2, GraduationCap, HandHeart, Ship, SunMedium } from "lucide-react";
import { LanguageType } from "../configs";
import { EmploymentType } from "../types";
import { BadgeType } from "../types/BadgeType";

const badgeTitleConfig = {
  ru: {
    full: "Полная занятость",
    part: "Неполная занятость",
    internship: "Стажировка",
    summer: "Работа на лето",
    summerInternship: "Летняя стажировка",
    resort: "Работа на курорте",
    graduation: "Работа для выпускников",
    volunteer: "Волонтерство",
  },

  en: {
    full: "Full time",
    part: "Part time",
    internship: "Internship",
    summer: "Summer job",
    summerInternship: "Summer Internship",
    resort: "Work at a resort",
    graduation: "Work for graduates",
    volunteer: "Volunteering",
  },

  de: {
    full: "Vollzeit",
    part: "Teilzeit",
    internship: "Praktikum",
    summer: "Sommerjob",
    summerInternship: "Sommerpraktikum",
    resort: "Arbeit am Ferienort",
    graduation: "Arbeit für Absolventen",
    volunteer: "Freiwilligenarbeit",
  },
};

export const getBadgeDataByEmploymentType = (
  language: LanguageType,
  type?: EmploymentType | string,
): BadgeType => {
  switch (type) {
    case "full": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].full,
      };
    }
    case "part": {
      return {
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].part,
      };
    }
    case "internship": {
      return {
        badgeIcon: Building2,
        badgeVariant: "secondary",
        badgeTitle: badgeTitleConfig[language].internship,
      };
    }
    case "summer": {
      return {
        badgeIcon: SunMedium,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].summer,
      };
    }
    case "summerInternship": {
      return {
        badgeIcon: SunMedium,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].summerInternship,
      };
    }
    case "resort": {
      return {
        badgeIcon: Ship,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].resort,
      };
    }
    case "graduation": {
      return {
        badgeIcon: GraduationCap,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].graduation,
      };
    }
    case "volunteer": {
      return {
        badgeIcon: HandHeart,
        badgeVariant: "success",
        badgeTitle: badgeTitleConfig[language].volunteer,
      };
    }

    default: {
      return {
        badgeVariant: "secondary",
      };
    }
  }
};
