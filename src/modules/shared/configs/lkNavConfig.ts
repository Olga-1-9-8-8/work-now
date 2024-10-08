import { ArrowRight, Building2, FileText, Heart, Home, LogOut, Mails, User2 } from "lucide-react";
import { ElementType } from "react";
import { UserEntity } from "../types";
import { LanguageType } from "./internationalization/InternationalizationConfig";

export const navTypes = [
  "home",
  "profile",
  "favorites",
  "resumes",
  "applies",
  "vacancies",
] as const;

export type NavTypes = (typeof navTypes)[number];

export type LkNavItems = {
  title: Record<LanguageType, string>;
  value: NavTypes;
  href: string;
  icon: ElementType;
  linkTitle?: Record<LanguageType, string>;
  linkIcon?: ElementType;
  isMain?: boolean;
  isExit?: boolean;
  role: UserEntity;
};

export const lkNavConfig: LkNavItems[] = [
  {
    title: {
      ru: "Главная",
      en: "Main",
      de: "Startseite",
    },
    value: "home",
    href: "/lk",
    icon: Home,
    isMain: true,
    role: UserEntity.All,
  },
  {
    title: {
      ru: "Профиль",
      en: "Profile",
      de: "Profil",
    },
    value: "profile",
    href: "/lk/details",
    linkTitle: {
      ru: "Выйти",
      en: "Logout",
      de: "Ausloggen",
    },
    linkIcon: LogOut,
    isExit: true,
    icon: User2,
    role: UserEntity.Person,
  },
  {
    title: {
      ru: "Профиль",
      en: "Profile",
      de: "Profil",
    },
    value: "profile",
    href: "/lk/details",
    linkTitle: {
      ru: "Выйти",
      en: "Logout",
      de: "Ausloggen",
    },
    linkIcon: LogOut,
    isExit: true,
    icon: Building2,
    role: UserEntity.Company,
  },
  {
    title: {
      ru: "Избранное",
      en: "Favorites",
      de: "Favoriten",
    },
    value: "favorites",
    href: "/lk/favorites",
    icon: Heart,
    linkTitle: {
      ru: "Перейти",
      en: "Navigate to",
      de: "Navigieren Sie zu",
    },
    linkIcon: ArrowRight,
    role: UserEntity.All,
  },
  {
    title: {
      ru: "Мои Резюме",
      en: "My Resumes",
      de: "Meine Lebensläufe",
    },
    value: "resumes",
    href: "/lk/resumes",
    icon: FileText,
    linkTitle: {
      ru: "Перейти",
      en: "Navigate to",
      de: "navigieren Sie zu",
    },
    linkIcon: ArrowRight,
    role: UserEntity.Person,
  },
  {
    title: {
      ru: "Мои Вакансии",
      en: "My Vacancies",
      de: "Meine Stellenangebote",
    },
    value: "vacancies",
    href: "/lk/vacancies",
    icon: FileText,
    linkTitle: {
      ru: "Перейти",
      en: "Navigate to",
      de: "Navigieren Sie zu",
    },
    linkIcon: ArrowRight,
    role: UserEntity.Company,
  },
  {
    title: {
      ru: "Мои Отклики",
      en: "My Applies",
      de: "Meine Antworten",
    },
    value: "applies",
    href: "/lk/applications",
    icon: Mails,
    linkTitle: {
      ru: "Перейти",
      en: "Navigate to",
      de: "Navigieren Sie zu",
    },
    linkIcon: ArrowRight,
    role: UserEntity.All,
  },
];
