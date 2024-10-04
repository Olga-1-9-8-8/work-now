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
  },
  {
    dataKey: "salaryMin",
    stroke: colors.primary.dark,
    fill: colors.primary.dark,
    name: {
      ru: "Средняя минимальная зарплата за день",
      en: "Average minimum daily wage",
      de: "Durchschnittlicher Mindestlohn pro Tag",
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
  },
];
