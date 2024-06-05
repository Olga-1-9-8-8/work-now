import { colors } from "../../../../tailwind.config";

export const homeChartSalaryConfig = [
  {
    dataKey: "salaryAverage",
    stroke: colors.primary.DEFAULT,
    fill: colors.primary.light,
    name: "Средняя (средняя из диапазона) зарплата за день",
    unit: "₽",
  },
  {
    dataKey: "salaryMin",
    stroke: colors.primary.dark,
    fill: colors.primary.dark,
    name: "Средняя минимальная зарплата за день",
    unit: "₽",
  },
  {
    dataKey: "salaryMax",
    stroke: colors.destructive.DEFAULT,
    fill: colors.destructive.DEFAULT,
    name: "Средняя максимальна зарплата за день",
    unit: "₽",
  },
];
