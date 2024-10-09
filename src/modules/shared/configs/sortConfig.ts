import { CreationDateType, SortType, UniversalItemsWithTitleType } from "../types";
import { LanguageType } from "./internationalization/InternationalizationConfig";

export type SortConfigType = {
  sort: UniversalItemsWithTitleType<SortType>;
  creation_date: UniversalItemsWithTitleType<CreationDateType>;
};

export type SortConfigItems = Record<LanguageType, SortConfigType>;

export const sortConfig: SortConfigItems = {
  ru: {
    sort: {
      title: "Сортировать по",
      items: [
        {
          title: "По дате",
          value: "creation_date-desc",
        },
        {
          title: "По убыванию зарплаты",
          value: "salary-desc",
        },
        {
          title: "По возрастанию зарплаты",
          value: "salary-asc",
        },
        {
          title: "По названию позиции (А-Я)",
          value: "position-asc",
        },
        {
          title: "По названию позиции (Я-А)",
          value: "position-desc",
        },
      ],
    },
    creation_date: {
      title: "Сортировать по времени",
      items: [
        {
          title: "За все время",
          value: "allTime",
        },
        {
          title: "За сутки",
          value: "lastDay",
        },
        {
          title: "За последние два дня",
          value: "lastTwoDays",
        },
        {
          title: "За последние три дня",
          value: "lastThreeDays",
        },
        {
          title: "За последнюю неделю",
          value: "lastWeek",
        },
        {
          title: "За последний месяц",
          value: "lastMonth",
        },
      ],
    },
  },
  en: {
    sort: {
      title: "Sort by",
      items: [
        {
          title: "By date",
          value: "creation_date-desc",
        },
        {
          title: "By descending salary",
          value: "salary-desc",
        },
        {
          title: "By ascending salary",
          value: "salary-asc",
        },
        {
          title: "By position (A-Z)",
          value: "position-asc",
        },
        {
          title: "By position (Z-A)",
          value: "position-desc",
        },
      ],
    },
    creation_date: {
      title: "Sort by time",
      items: [
        {
          title: "By all time",
          value: "allTime",
        },
        {
          title: "By last day",
          value: "lastDay",
        },
        {
          title: "By last two days",
          value: "lastTwoDays",
        },
        {
          title: "By last three days",
          value: "lastThreeDays",
        },
        {
          title: "By last week",
          value: "lastWeek",
        },
        {
          title: "By last month",
          value: "lastMonth",
        },
      ],
    },
  },
  de: {
    sort: {
      title: "Sortieren nach",
      items: [
        {
          title: "Nach Datum sortieren",
          value: "creation_date-desc",
        },
        {
          title: "Nach absteigendem Gehalt",
          value: "salary-desc",
        },
        {
          title: "Nach Gehalt aufsteigend",
          value: "salary-asc",
        },
        {
          title: "Nach Position (A-Z)",
          value: "position-asc",
        },
        {
          title: "Nach Position (Z-A)",
          value: "position-desc",
        },
      ],
    },
    creation_date: {
      title: "Sortieren nach Zeit",
      items: [
        {
          title: "Alle Zeit",
          value: "allTime",
        },
        {
          title: "Letzter Tag",
          value: "lastDay",
        },
        {
          title: "Letzte zwei Tage",
          value: "lastTwoDays",
        },
        {
          title: "Letzte drei Tage",
          value: "lastThreeDays",
        },
        {
          title: "Letzte Woche",
          value: "lastWeek",
        },
        {
          title: "Letzter Monat",
          value: "lastMonth",
        },
      ],
    },
  },
};
