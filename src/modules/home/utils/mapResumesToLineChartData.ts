import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { ru } from "date-fns/locale";
import { LastResumesApiTypeInput } from "../../resume/list";

export const mapResumesToLineChartData = (resumes: LastResumesApiTypeInput[], numDays: number) => {
  const dates = eachDayOfInterval({
    start: subDays(new Date(), numDays),
    end: subDays(new Date(), 1),
  });

  return dates.map((date) => {
    const sameDateSalariesArr = resumes
      .filter((resume) => isSameDay(date, new Date(resume.creationDate)))
      .map((resume) => resume.salary || [])
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
      title: format(date, "dd MMM", {
        locale: ru,
      }),
      salaryAverage: getSalaryAverage(),
      salaryMin: getSalaryMin(),
      salaryMax: getSalaryMax(),
    };
  });
};
