import { formatCurrency } from "../../../utils/helpers/currencyHelper";

export const getSalaryBadge = (salary: string[]) => {
  const salaryFrom = Number(salary?.[0]);
  const salaryTo = Number(salary?.[1]);

  if (!salaryFrom && !salaryTo) {
    return "Зарплата не указана";
  }
  if (salaryFrom) {
    return `от ${formatCurrency(salaryFrom)}`;
  }
  if (salaryTo) {
    return ` до ${formatCurrency(salaryTo)}`;
  }

  return `от ${formatCurrency(salaryFrom)} до ${formatCurrency(salaryTo)}`;
};
