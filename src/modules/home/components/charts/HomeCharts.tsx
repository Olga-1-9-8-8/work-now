import { Tabs } from "../../../shared/components/tabs";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

export const HomeCharts = () => {
  return (
    <Tabs
      tabs={[
        {
          value: "overview",
          title: "Графики аналитики",
          content: <HomeChartsOverview />,
        },
        {
          value: "pricing",
          title: "Цена для компаний",
          content: <HomeChartsPricing />,
        },
      ]}
      defaultValue="overview"
    />
  );
};
