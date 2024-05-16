import { formatCurrency } from "./helpers/currencyHelper";

export const getSalaryTitle = (salary?: number[]) => {
  const salaryFrom = salary?.[0];
  const salaryTo = salary?.[1];

  if (salaryFrom && salaryTo) {
    return `от ${formatCurrency(salaryFrom)} до ${formatCurrency(salaryTo)}`;
  }

  if (salaryFrom) {
    return `от ${formatCurrency(salaryFrom)}`;
  }

  if (salaryTo) {
    return ` до ${formatCurrency(salaryTo)}`;
  }

  return "Зарплата не указана";
};
