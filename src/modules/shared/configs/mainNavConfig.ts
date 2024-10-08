import {
  Briefcase,
  CircleUserRound,
  FileText,
  Heart,
  LogIn,
  LogOut,
  Mails,
  UserCheck,
  UserRound,
} from "lucide-react";
import { ElementType } from "react";
import { UserRoles } from "../types";
import { LanguageType } from "./internationalization/InternationalizationConfig";

export type MainNavItem = {
  title: Record<LanguageType, string>;
  href: string;
  icon: ElementType;
  permission: UserRoles;
  type?: "button";
  isExit?: boolean;
};

export type MainNavItems = (MainNavItem & {
  items?: MainNavItem[];
})[];

export const mainNavConfig: MainNavItems = [
  {
    title: {
      ru: "Найти работу",
      en: "Find a job",
      de: "Finde einen Job",
    },
    href: "/vacancies",
    icon: Briefcase,
    permission: UserRoles.All,
  },
  {
    title: {
      ru: "Найти сотрудника",
      en: "Find employees",
      de: "Mitarbeiter finden",
    },
    href: "/resumes",
    icon: CircleUserRound,
    permission: UserRoles.All,
  },
  {
    title: {
      ru: "Избранное",
      en: "Favorites",
      de: "Favoriten",
    },
    href: "/lk/favorites",
    icon: Heart,
    permission: UserRoles.Authorized,
  },
  {
    title: {
      ru: "Отклики",
      en: "Applies",
      de: "Antworten",
    },
    href: "/lk/applications",
    icon: Mails,
    permission: UserRoles.Authorized,
  },
  {
    title: {
      ru: "Профиль",
      en: "Profile",
      de: "Profil",
    },
    href: "/lk",
    icon: UserRound,
    permission: UserRoles.Authorized,
    items: [
      {
        title: {
          ru: "Мои данные",
          en: "My data",
          de: "Meine Daten",
        },
        href: "/lk/details",
        icon: UserCheck,
        permission: UserRoles.Authorized,
      },
      {
        title: {
          ru: "Избранное",
          en: "Favorites",
          de: "Favoriten",
        },
        href: "/lk/favorites",
        icon: Heart,
        permission: UserRoles.Authorized,
      },
      {
        title: {
          ru: "Мои отклики",
          en: "My applies",
          de: "Meine Bewerbungen",
        },
        href: "/lk/applications",
        icon: Mails,
        permission: UserRoles.Authorized,
      },
      {
        title: {
          ru: "Мои резюме",
          en: "My resumes",
          de: "Meine Lebenslauf",
        },
        href: "/lk/resumes",
        icon: FileText,
        permission: UserRoles.Authorized,
      },
      {
        title: {
          ru: "Выйти",
          en: "Logout",
          de: "Sich wieder abmelden",
        },
        href: "/login",
        icon: LogOut,
        permission: UserRoles.Authorized,
        isExit: true,
      },
    ],
  },
  {
    title: {
      ru: "Войти",
      en: "Login",
      de: "Einloggen",
    },
    href: "/login",
    icon: LogIn,
    type: "button",
    permission: UserRoles.NotAuthorized,
  },
];
