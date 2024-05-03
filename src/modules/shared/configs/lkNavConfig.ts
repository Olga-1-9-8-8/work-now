import { ArrowRight, FileText, Heart, Home, LogOut, Mails, UserRound } from "lucide-react";
import { ElementType } from "react";

export const navTypes = ["home", "profile", "favorites", "resumes", "applies"] as const;

export type NavTypes = (typeof navTypes)[number];

export type LkNavItems = {
  title: string;
  value: NavTypes;
  href: string;
  icon: ElementType;
  linkTitle?: string;
  linkIcon?: ElementType;
  linkHref?: string;
  isMain?: boolean;
};

export const lkNavConfig: LkNavItems[] = [
  {
    title: "Главная",
    value: "home",
    href: "/lk",
    icon: Home,
    isMain: true,
  },
  {
    title: "Профиль",
    value: "profile",
    href: "/lk/details",
    icon: UserRound,
    linkTitle: "Выйти",
    linkIcon: LogOut,
    linkHref: "/login",
  },
  {
    title: "Избранное",
    value: "favorites",
    href: "/lk/favorites",
    icon: Heart,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
  },
  {
    title: "Мои резюме",
    value: "resumes",
    href: "/lk/resumes",
    icon: FileText,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
  },

  {
    title: "Мои Отклики",
    value: "applies",
    href: "/lk/applications",
    icon: Mails,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
  },
];
