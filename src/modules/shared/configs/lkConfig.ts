import { ArrowRight, FileText, Heart, LogOut, Mails, UserRound } from "lucide-react";
import { ElementType } from "react";

export type LkItem = {
  title: string;
  href: string;
  icon: ElementType;
  linkTitle: string;
  linkIcon: ElementType;
  linkHref?: string;
  count?: number;
};

export const lkConfig: LkItem[] = [
  {
    title: "Профиль",
    href: "/lk/details",
    icon: UserRound,
    linkTitle: "Выйти",
    linkIcon: LogOut,
    linkHref: "/",
  },
  {
    title: "Избранное",
    href: "/lk/favorites",
    icon: Heart,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    count: 2,
  },
  {
    title: "Мои резюме",
    href: "/lk/resumes",
    icon: FileText,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    count: 3,
  },

  {
    title: "Мои Отклики",
    href: "/lk/applications",
    icon: Mails,
    linkTitle: "Перейти",
    linkIcon: ArrowRight,
    count: 4,
  },
];
