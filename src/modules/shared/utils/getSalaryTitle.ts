import { currencyConfigs, LanguageType } from "../configs";
import { formatCurrency } from "./helpers/currencyHelper";

const salaryTitleConfigs = {
  ru: {
    from: "от",
    to: "до",
    notSpecified: "Not specified",
  },
  en: {
    from: "from",
    to: "to",
    notSpecified: "Not specified",
  },
  de: {
    from: "von",
    to: "bis",
    notSpecified: "Nicht angegeben",
  },
};

const getFormattedSalary = (salary: number, language: LanguageType) => {
  return formatCurrency(salary, language, currencyConfigs[language].currency);
};

export const getSalaryTitle = (language: LanguageType, salary?: number[]) => {
  const salaryFrom = salary?.[0];
  const salaryTo = salary?.[1];

  if (salaryFrom && salaryTo) {
    return `${salaryTitleConfigs[language].from} ${getFormattedSalary(salaryFrom, language)} ${salaryTitleConfigs[language].to} ${getFormattedSalary(salaryTo, language)}`;
  }

  if (salaryFrom) {
    return `${salaryTitleConfigs[language].from} ${getFormattedSalary(salaryFrom, language)}`;
  }

  if (salaryTo) {
    return `${salaryTitleConfigs[language].to} ${getFormattedSalary(salaryTo, language)}`;
  }

  return salaryTitleConfigs[language].notSpecified;
};
