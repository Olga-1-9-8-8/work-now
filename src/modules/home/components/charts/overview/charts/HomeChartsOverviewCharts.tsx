import { useLastResumesAnalytics } from "../../../../hooks/useLastResumesAnalytics";
import { AgeBarChart } from "./chart/AgeBarChart";
import { GenderChart } from "./chart/GenderChart";
import { SalaryLineChart } from "./chart/SalaryLineChart";

export const HomeChartsOverviewCharts = () => {
  const { lastResumes, isLoading, numDays } = useLastResumesAnalytics();

  return (
    <div className="flex min-h-3.5 flex-col gap-4">
      <SalaryLineChart
        isLoading={isLoading}
        items={lastResumes}
        numDays={numDays}
        title="График желаемой зарплаты, указанной в опубликованных резюме по дням за последнии"
        description="Указана средняя максимальная/минимальная/средняя зарплата за день по всем резюме"
      />

      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <GenderChart
          isLoading={isLoading}
          items={lastResumes}
          numDays={numDays}
          title="Соотношение полов в опубликованных резюме за последнии"
        />
        <AgeBarChart
          isLoading={isLoading}
          items={lastResumes}
          numDays={numDays}
          title="Средний возраст соискателей в опубликованных резюме за последнии"
        />
      </div>
    </div>
  );
};
