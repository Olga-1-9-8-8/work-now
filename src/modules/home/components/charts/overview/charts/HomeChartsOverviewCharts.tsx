import { Spinner } from "../../../../../shared/ui/spinner/Spinner";
import { useLastResumesAnalytics } from "../../../../hooks/useLastResumesAnalytics";
import { AgeBarChart } from "./chart/AgeBarChart";
import { GenderChart } from "./chart/GenderChart";
import { SalaryLineChart } from "./chart/SalaryLineChart";

export const HomeChartsOverviewCharts = () => {
  const { lastResumes, isLoading, numDays } = useLastResumesAnalytics();

  if (isLoading) return <Spinner />;

  if (!lastResumes) return null;

  return (
    <div className="flex flex-col gap-4">
      <SalaryLineChart
        items={lastResumes}
        numDays={numDays}
        title="График желаемой зарплаты, указанной в опубликованных резюме по дням за последнии"
        description="Указана средняя максимальная/минимальная/средняя зарплата за день по всем резюме"
      />

      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <GenderChart
          items={lastResumes}
          numDays={numDays}
          title="Соотношение полов в опубликованных резюме за последнии"
          description="Соотношение мужчин и женщин в последних резюме"
        />
        <AgeBarChart
          items={lastResumes}
          numDays={numDays}
          title="Средний возраст соискателей в опубликованных резюме за последнии"
        />
      </div>
    </div>
  );
};
