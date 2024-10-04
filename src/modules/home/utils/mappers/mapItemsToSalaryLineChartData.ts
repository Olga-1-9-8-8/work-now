import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { de, enUS, ru } from "date-fns/locale";
import { LanguageType } from "../../../shared/configs/internationalization/InternationalizationConfig";
import { UniversalItemAnalyticsApiTypeInput } from "../../types/UniversalItemAnalyticsApiTypeInput";

export const mapItemsToSalaryLineChartData = (
  items: UniversalItemAnalyticsApiTypeInput[],
  numDays: number,
  language: LanguageType,
) => {
  const dates = eachDayOfInterval({
    start: subDays(new Date(), numDays),
    end: subDays(new Date(), 0),
  });

  const locales = { en: enUS, de, ru };

  return dates.map((date) => {
    const sameDateSalariesArr = items
      .filter((item) => isSameDay(date, new Date(item.creation_date)))
      .map((item) => item.salary || [])
      .filter((item) => item.length > 0);

    const getSalaryAverage = () => {
      const salaryRangeArr = sameDateSalariesArr.filter((salary) => salary[0] || salary[1]);
      if (salaryRangeArr.length === 0) return 0;
      const sumDayArr = salaryRangeArr.reduce((acc, sal) => acc + (sal[0] + sal[1]) / 2, 0);
      return sumDayArr / salaryRangeArr.length;
    };

    const getSalaryMin = () => {
      const salaryMinArr = sameDateSalariesArr.filter((salary) => salary[0]);
      if (salaryMinArr.length === 0) return 0;
      const sumDayArr = salaryMinArr.reduce((acc, sal) => acc + sal[0], 0);
      return sumDayArr / salaryMinArr.length;
    };

    const getSalaryMax = () => {
      const salaryMaxArr = sameDateSalariesArr.filter((salary) => salary[1]);
      if (salaryMaxArr.length === 0) return 0;
      const sumDayArr = salaryMaxArr.reduce((acc, sal) => acc + sal[1], 0);
      return sumDayArr / salaryMaxArr.length;
    };

    return {
      title: format(date, "dd MMM", { locale: locales[language] ?? enUS }),
      salaryAverage: getSalaryAverage(),
      salaryMin: getSalaryMin(),
      salaryMax: getSalaryMax(),
    };
  });
};
