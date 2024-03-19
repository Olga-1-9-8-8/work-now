export interface SearchOptionsItemOption {
  title: string;
  value: string;
}

export interface SearchOptionsItem {
  title: string;
  options: SearchOptionsItemOption[];
}

export type SearchOptions = {
  schedule: SearchOptionsItem;
  employment: SearchOptionsItem;
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
};
