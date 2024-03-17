import { FileText, Heart, Home, Mails, UserRound } from "lucide-react";
import { ElementType } from "react";

export type LkNavItems = {
  title: string;
  href: string;
  icon: ElementType;
};

export const lkNavConfig: LkNavItems[] = [
  {
    title: "Главная",
    href: "/lk",
    icon: Home,
  },
  {
    title: "Профиль",
    href: "/lk/details",
    icon: UserRound,
  },
  {
    title: "Избранное",
    href: "/lk/favorites",
    icon: Heart,
  },
  {
    title: "Мои резюме",
    href: "/lk/resumes",
    icon: FileText,
  },

  {
    title: "Мои Отклики",
    href: "/lk/applications",
    icon: Mails,
  },
];
