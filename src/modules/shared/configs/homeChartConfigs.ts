import { colors } from "../../../../tailwind.config";

export const homeChartSalaryConfig = [
  {
    dataKey: "salaryAverage",
    stroke: colors.primary.DEFAULT,
    fill: colors.primary.light,
    name: {
      ru: "Средняя из диапазона зарплата за день",
      en: "Average daily salary from the range",
      de: "Durchschnittliche Gehaltsspanne pro Tag",
    },
    nameShort: {
      ru: "Средняя зп",
      en: "Average salary",
      de: "durchs. Gehaltsspanne",
    },
  },
  {
    dataKey: "salaryMin",
    stroke: colors.primary.dark,
    fill: colors.primary.dark,
    name: {
      ru: "Средняя минимальная зарплата за день",
      en: "Average minimum daily salary",
      de: "Durchschnittlicher Mindestlohn pro Tag",
    },
    nameShort: {
      ru: "Средняя мин. зп",
      en: "Average min salary",
      de: "durchs. Mindestlohn",
    },
  },
  {
    dataKey: "salaryMax",
    stroke: colors.destructive.DEFAULT,
    fill: colors.destructive.DEFAULT,
    name: {
      ru: "Средняя максимальна зарплата за день",
      en: "Average maximum salary per day",
      de: "Durchschnittliches Höchstgehalt pro Tag",
    },
    nameShort: {
      ru: "Средняя мак. зп",
      en: "Average max salary",
      de: "durchs. Höchstgehalt",
    },
  },
];
