import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher";
import { useLastResumesAnalytics } from "../../../../hooks/useLastResumesAnalytics";
import { AgeBarChart } from "./chart/AgeBarChart";
import { GenderChart } from "./chart/GenderChart";
import { SalaryLineChart } from "./chart/SalaryLineChart";

export const HomeChartsOverviewCharts = () => {
  const { t } = useLanguageSwitcher("home");
  const { lastResumes, isLoading, numDays } = useLastResumesAnalytics();

  return (
    <div className="flex min-h-3.5 flex-col gap-4">
      <SalaryLineChart
        isLoading={isLoading}
        items={lastResumes}
        numDays={numDays}
        title={t("home.charts.salary.title")}
        description={t("home.charts.salary.description")}
      />

      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <GenderChart
          isLoading={isLoading}
          items={lastResumes}
          numDays={numDays}
          title={t("home.charts.gender.title")}
        />
        <AgeBarChart
          isLoading={isLoading}
          items={lastResumes}
          numDays={numDays}
          title={t("home.charts.age.title")}
        />
      </div>
    </div>
  );
};
