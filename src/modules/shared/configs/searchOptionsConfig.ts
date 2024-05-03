export const employmentTypes = [
  "summer",
  "resort",
  "graduation",
  "volunteer",
  "internship",
  "summerInternship",
  "full",
  "part",
] as const;
export const scheduleTypes = ["fullDay", "scheduleShift", "flexible", "remote"] as const;
export const educationTypes = [
  "secondary",
  "secondarySpecial",
  "higherUnfinished",
  "higher",
] as const;
export const weekHoursTypes = ["40", "20", "10"] as const;

export const sortTypes = ["publication-desc", "salary-desc", "salary-asc"] as const;
export const sortDateTypes = [
  "allTime",
  "lastDay",
  "lastTwoDays",
  "lastThreeDays",
  "lastWeek",
  "lastMonth",
] as const;

export type EmploymentType = (typeof employmentTypes)[number];
export type ScheduleType = (typeof scheduleTypes)[number];
export type EducationType = (typeof educationTypes)[number];
export type WeekHoursType = (typeof weekHoursTypes)[number];
export type SortType = (typeof sortTypes)[number];
export type SortDateType = (typeof sortDateTypes)[number];

export interface SearchOptionsItemOption<T> {
  title: string;
  value: T;
}

export interface SearchOptionsItem<T> {
  title: string;
  options: SearchOptionsItemOption<T>[];
}

export type SearchOptions = {
  schedule: SearchOptionsItem<ScheduleType>;
  employment: SearchOptionsItem<EmploymentType>;
  education: SearchOptionsItem<EducationType>;
  weekHours: SearchOptionsItem<WeekHoursType>;
};

export type SortOptions = {
  sort: SearchOptionsItem<SortType>;
  sortDate: SearchOptionsItem<SortDateType>;
};

export const searchOptionsConfig: SearchOptions = {
  schedule: {
    title: "Выберите график работы",
    options: [
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
    title: "Выберите тип вакансии",
    options: [
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
    options: [
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
  weekHours: {
    title: "Количество часов в неделю",
    options: [
      {
        title: "40 часов (8 часов в день)",
        value: "40",
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

export const popularSearchOptionsConfig: SearchOptions = {
  schedule: {
    title: "Выберите график работы",
    options: [
      {
        title: "Удаленная работа",
        value: "remote",
      },
    ],
  },
  employment: {
    title: "Выберите тип вакансии",
    options: [
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
    options: [
      {
        title: "Высшее",
        value: "higher",
      },
    ],
  },
  weekHours: {
    title: "Количество часов в неделю",
    options: [
      {
        title: "20 ч в неделю (4 ч в день)",
        value: "20",
      },
    ],
  },
};

export const sortOptionsConfig: SortOptions = {
  sort: {
    title: "Сортировать по",
    options: [
      {
        title: "По дате",
        value: "publication-desc",
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
  sortDate: {
    title: "Сортировать по времени",
    options: [
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
