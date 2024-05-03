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

export type MainNavItem = {
  title: string;
  href: string;
  icon: ElementType;
  permission: UserRoles;
  type?: "button";
};

export type MainNavItems = (MainNavItem & {
  items?: MainNavItem[];
})[];

export const mainNavConfig: MainNavItems = [
  {
    title: "Найти работу",
    href: "/vacancies",
    icon: Briefcase,
    permission: UserRoles.All,
  },
  {
    title: "Найти сотрудника",
    href: "/resumes",
    icon: CircleUserRound,
    permission: UserRoles.All,
  },
  {
    title: "Избранное",
    href: "/lk/favorites",
    icon: Heart,
    permission: UserRoles.Authorized,
  },
  {
    title: "Профиль",
    href: "/lk",
    icon: UserRound,
    permission: UserRoles.Authorized,
    items: [
      {
        title: "Мои данные",
        href: "/lk/details",
        icon: UserCheck,
        permission: UserRoles.Authorized,
      },
      {
        title: "Избранное",
        href: "/lk/favorites",
        icon: Heart,
        permission: UserRoles.Authorized,
      },
      {
        title: "Мои отклики",
        href: "/lk/applications",
        icon: Mails,
        permission: UserRoles.Authorized,
      },
      {
        title: "Мои резюме",
        href: "/lk/resumes",
        icon: FileText,
        permission: UserRoles.Authorized,
      },
      {
        title: "Выйти",
        href: "/login",
        icon: LogOut,
        permission: UserRoles.Authorized,
      },
    ],
  },

  {
    title: "Войти или создать профиль",
    href: "/login",
    icon: LogIn,
    type: "button",
    permission: UserRoles.NotAuthorized,
  },
];
