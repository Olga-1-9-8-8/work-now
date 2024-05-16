import { CreationDateType, SortType, UniversalItemsWithTitleType } from "../types";

export type SortConfigType = {
  sort: UniversalItemsWithTitleType<SortType>;
  creationDate: UniversalItemsWithTitleType<CreationDateType>;
};

export const sortConfig: SortConfigType = {
  sort: {
    title: "Сортировать по",
    items: [
      {
        title: "По дате",
        value: "creationDate-desc",
      },
      {
        title: "По убыванию зарплаты",
        value: "salary-desc",
      },
      {
        title: "По возрастанию зарплаты",
        value: "salary-asc",
      },
    ],
  },
  creationDate: {
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
};
