import { ArrowRight, Building2, FileText, Heart, Home, LogOut, Mails, User2 } from "lucide-react";
import { ElementType } from "react";
import { UserEntity } from "../types";

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
  title: string;
  value: NavTypes;
  href: string;
  icon: ElementType;
  linkTitle?: string;
  linkIcon?: ElementType;
  isMain?: boolean;
  isExit?: boolean;
  role: UserEntity;
};

export const lkNavConfig: LkNavItems[] = [
  {
    title: "Главная",
    value: "home",
    href: "/lk",
    icon: Home,
    isMain: true,
    role: UserEntity.All,
  },
  {
    title: "Профиль",
    value: "profile",
    href: "/lk/details",
    linkTitle: "Выйти",
    linkIcon: LogOut,
    isExit: true,
    icon: User2,
    role: UserEntity.Person,
  },
  {
    title: "Профиль",
    value: "profile",
    href: "/lk/details",
    linkTitle: "Выйти",
    linkIcon: LogOut,
    isExit: true,
    icon: Building2,
    role: UserEntity.Company,
  },
  {
    title: "Избранное",
    value: "favorites",
    href: "/lk/favorites",
    icon: Heart,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    role: UserEntity.All,
  },
  {
    title: "Мои резюме",
    value: "resumes",
    href: "/lk/resumes",
    icon: FileText,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    role: UserEntity.Person,
  },
  {
    title: "Мои вакансии",
    value: "vacancies",
    href: "/lk/vacancies",
    icon: FileText,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    role: UserEntity.Company,
  },
  {
    title: "Мои Отклики",
    value: "applies",
    href: "/lk/applications",
    icon: Mails,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    role: UserEntity.All,
  },
];
