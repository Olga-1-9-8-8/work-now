import {
  EducationType,
  EmploymentType,
  ScheduleType,
  UniversalItemsWithTitleType,
  WeekHoursType,
} from "../types";

export type FilterConfigType = {
  schedule: UniversalItemsWithTitleType<ScheduleType>;
  employment: UniversalItemsWithTitleType<EmploymentType>;
  education: UniversalItemsWithTitleType<EducationType>;
  week_hours: UniversalItemsWithTitleType<WeekHoursType>;
};

export const filterConfig: FilterConfigType = {
  schedule: {
    title: "Выберите график работы",
    items: [
      {
        title: "Полный день",
        value: "fullDay",
      },
      {
        title: "Сменный график",
        value: "scheduleShift",
      },
      {
        title: "Гибкий график",
        value: "flexible",
      },
      {
        title: "Удаленная работа",
        value: "remote",
      },
    ],
  },
  employment: {
    title: "Выберите тип работы",
    items: [
      {
        title: "Полная занятость",
        value: "full",
      },
      {
        title: "Неполная занятость",
        value: "part",
      },
      {
        title: "Стажировка",
        value: "internship",
      },
      {
        title: "Летняя стажировка",
        value: "summerInternship",
      },
      {
        title: "Работа на лето",
        value: "summer",
      },
      {
        title: "Работа на курорте",
        value: "resort",
      },
      {
        title: "Работа для выпускников",
        value: "graduation",
      },
      {
        title: "Волонтерство",
        value: "volunteer",
      },
    ],
  },
  education: {
    title: "Выберите образование",
    items: [
      {
        title: "Среднее",
        value: "secondary",
      },
      {
        title: "Среднее специальное",
        value: "secondarySpecial",
      },
      {
        title: "Неоконченное высшее",
        value: "higherUnfinished",
      },
      {
        title: "Высшее",
        value: "higher",
      },
    ],
  },
  week_hours: {
    title: "Количество часов в неделю",
    items: [
      {
        title: "40 часов (8 часов в день)",
        value: "40",
      },
      {
        title: "30 часов (6 часов в день)",
        value: "30",
      },
      {
        title: "20 часов (4 часа в день)",
        value: "20",
      },
      {
        title: "10 часов (2 часа в день)",
        value: "10",
      },
    ],
  },
};

export const popularFilterConfig: FilterConfigType = {
  schedule: {
    title: "Выберите график работы",
    items: [
      {
        title: "Удаленная работа",
        value: "remote",
      },
    ],
  },
  employment: {
    title: "Выберите тип вакансии",
    items: [
      {
        title: "Полная занятость",
        value: "full",
      },
      {
        title: "Работа на лето",
        value: "summer",
      },
      {
        title: "Работа на курорте",
        value: "resort",
      },
    ],
  },
  education: {
    title: "Выберите образование",
    items: [
      {
        title: "Высшее",
        value: "higher",
      },
    ],
  },
  week_hours: {
    title: "Количество часов в неделю",
    items: [
      {
        title: "20 ч в неделю (4 ч в день)",
        value: "20",
      },
    ],
  },
};
