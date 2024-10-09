import {
  EducationType,
  EmploymentType,
  ScheduleType,
  UniversalItemsWithTitleType,
  WeekHoursType,
} from "../types";
import { LanguageType } from "./internationalization/InternationalizationConfig";

export type FilterConfigType = {
  schedule: UniversalItemsWithTitleType<ScheduleType>;
  employment: UniversalItemsWithTitleType<EmploymentType>;
  education: UniversalItemsWithTitleType<EducationType>;
  week_hours: UniversalItemsWithTitleType<WeekHoursType>;
};

export type FilterConfigItems = Record<LanguageType, FilterConfigType>;

export const filterConfig: FilterConfigItems = {
  ru: {
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
  },
  en: {
    schedule: {
      title: "Select work schedule",
      items: [
        {
          title: "Full day",
          value: "fullDay",
        },
        {
          title: "Schedule shift",
          value: "scheduleShift",
        },
        {
          title: "Flexible schedule",
          value: "flexible",
        },
        {
          title: "Remote work",
          value: "remote",
        },
      ],
    },
    employment: {
      title: "Select employment type",
      items: [
        {
          title: "Full time",
          value: "full",
        },
        {
          title: "Part time",
          value: "part",
        },
        {
          title: "Internship",
          value: "internship",
        },
        {
          title: "Summer internship",
          value: "summerInternship",
        },
        {
          title: "Summer job",
          value: "summer",
        },
        {
          title: "Work at a resort",
          value: "resort",
        },
        {
          title: "Work for graduates",
          value: "graduation",
        },
        {
          title: "Volunteering",
          value: "volunteer",
        },
      ],
    },
    education: {
      title: "Select education",
      items: [
        {
          title: "Secondary",
          value: "secondary",
        },
        {
          title: "Secondary special",
          value: "secondarySpecial",
        },
        {
          title: "Unfinished higher",
          value: "higherUnfinished",
        },
        {
          title: "Higher",
          value: "higher",
        },
      ],
    },
    week_hours: {
      title: "Number of hours per week",
      items: [
        {
          title: "40 hours (8 hours per day)",
          value: "40",
        },
        {
          title: "30 hours (6 hours per day)",
          value: "30",
        },
        {
          title: "20 hours (4 hours per day)",
          value: "20",
        },
        {
          title: "10 hours (2 hours per day)",
          value: "10",
        },
      ],
    },
  },
  de: {
    schedule: {
      title: "Wählen Sie den Arbeitszeitplan",
      items: [
        {
          title: "Vollzeit",
          value: "fullDay",
        },
        {
          title: "Schichtarbeit",
          value: "scheduleShift",
        },
        {
          title: "Gleitzeit",
          value: "flexible",
        },
        {
          title: "Fernarbeit",
          value: "remote",
        },
      ],
    },
    employment: {
      title: "Wählen Sie den Arbeitstyp",
      items: [
        {
          title: "Vollzeit",
          value: "full",
        },
        {
          title: "Teilzeit",
          value: "part",
        },
        {
          title: "Praktikum",
          value: "internship",
        },
        {
          title: "Sommerpraktikum",
          value: "summerInternship",
        },
        {
          title: "Sommerjob",
          value: "summer",
        },
        {
          title: "Arbeit am Ferienort",
          value: "resort",
        },
        {
          title: "Arbeit für Absolventen",
          value: "graduation",
        },
        {
          title: "Freiwilligenarbeit",
          value: "volunteer",
        },
      ],
    },
    education: {
      title: "Wählen Sie die Bildung",
      items: [
        {
          title: "Oberschulbildung",
          value: "secondary",
        },
        {
          title: "Fachausbildung",
          value: "secondarySpecial",
        },
        {
          title: "Unvollständige Hochschulbildung",
          value: "higherUnfinished",
        },
        {
          title: "Hochschulbildung",
          value: "higher",
        },
      ],
    },
    week_hours: {
      title: "Anzahl der Stunden pro Woche",
      items: [
        {
          title: "40 Stunden (8 Stunden pro Tag)",
          value: "40",
        },
        {
          title: "30 Stunden (6 Stunden pro Tag)",
          value: "30",
        },
        {
          title: "20 Stunden (4 Stunden pro Tag)",
          value: "20",
        },
        {
          title: "10 Stunden (2 Stunden pro Tag)",
          value: "10",
        },
      ],
    },
  },
};

export const popularFilterConfig: FilterConfigItems = {
  ru: {
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
  },
  en: {
    schedule: {
      title: "Select work schedule",
      items: [
        {
          title: "Remote work",
          value: "remote",
        },
      ],
    },
    employment: {
      title: "Select employment type",
      items: [
        {
          title: "Full-time",
          value: "full",
        },
        {
          title: "Summer job",
          value: "summer",
        },

        {
          title: "Work at a resort",
          value: "resort",
        },
      ],
    },
    education: {
      title: "Select education",
      items: [
        {
          title: "Higher education",
          value: "higher",
        },
      ],
    },
    week_hours: {
      title: "Number of hours per week",
      items: [
        {
          title: "20 hours (4 hours per day)",
          value: "20",
        },
      ],
    },
  },
  de: {
    schedule: {
      title: "Wählen Sie den Arbeitszeitplan",
      items: [
        {
          title: "Fernarbeit",
          value: "remote",
        },
      ],
    },
    employment: {
      title: "Wählen Sie den Arbeitstyp",
      items: [
        {
          title: "Vollzeit",
          value: "full",
        },
        {
          title: "Sommerjob",
          value: "summer",
        },
        {
          title: "Arbeit am Ferienort",
          value: "resort",
        },
      ],
    },
    education: {
      title: "Wählen Sie die Bildung",
      items: [
        {
          title: "Hochschulbildung",
          value: "higher",
        },
      ],
    },
    week_hours: {
      title: "Anzahl der Stunden pro Woche",
      items: [
        {
          title: "20 Stunden (4 Stunden pro Tag)",
          value: "20",
        },
      ],
    },
  },
};
