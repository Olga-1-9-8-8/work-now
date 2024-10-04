/* eslint-disable unicorn/no-array-reduce */
import { currencyConfigs } from "../../shared/configs";
import { LanguageType } from "../../shared/configs/internationalization/InternationalizationConfig";
import { getAverageSalary } from "../../shared/utils";
import { formatCurrency } from "../../shared/utils/helpers";

export const getAverageApplicantsSalary = <T extends { salary: number[] | null }[]>(
  items: T,
  language: LanguageType,
) => {
  let countItemsWithSalary = 0;

  const sumSalary = items.reduce((prev, curr) => {
    if (!curr.salary || curr.salary.length === 0 || (!curr.salary[0] && !curr.salary[1])) {
      return prev;
    }
    countItemsWithSalary += 1;
    return prev + getAverageSalary(curr.salary);
  }, 0);

  return countItemsWithSalary
    ? formatCurrency(
        sumSalary / countItemsWithSalary,
        language,
        currencyConfigs[language as keyof typeof currencyConfigs].currency,
      )
    : undefined;
};
