import { BadgeRussianRuble, FileStack, History, Mails } from "lucide-react";
import { ElementType } from "react";

export type СhartOverviewItem = {
  title: string;
  icon: ElementType;
  contentTitle: string;
  contentDescription: string;
};

export const chartOverviewConfig: СhartOverviewItem[] = [
  {
    title: "Всего вакансий",
    icon: FileStack,
    contentTitle: "36 800",
    contentDescription: "+0.11% c прошлого месяца",
  },
  {
    title: "Средняя зарплата",
    icon: BadgeRussianRuble,
    contentTitle: "77 450 ₽",
    contentDescription: "+0.21% c прошлого месяца",
  },
  {
    title: "Среднее количество откликов",
    icon: Mails,
    contentTitle: "15",
    contentDescription: "-0.41% c прошлого месяца",
  },
  {
    title: "Среднее время ожидания отклика",
    icon: History,
    contentTitle: "34 часа",
    contentDescription: "-0.11% c прошлого месяца",
  },
];
