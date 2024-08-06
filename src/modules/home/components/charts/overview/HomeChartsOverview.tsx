import { HomeChartsOverviewCards } from "./cards/HomeChartsOverviewCards";
import { HomeChartsOverviewCharts } from "./charts/HomeChartsOverviewCharts";
import { HomeChartsOverviewToggles } from "./toggles/HomeChartsOverviewToggles";

export const HomeChartsOverview = () => {
  return (
    <div className="flex flex-col gap-10 py-4">
      <HomeChartsOverviewToggles />
      <HomeChartsOverviewCards />
      <HomeChartsOverviewCharts />
    </div>
  );
};
