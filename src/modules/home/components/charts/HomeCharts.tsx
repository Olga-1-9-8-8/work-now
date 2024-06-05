import { Tabs } from "../../../shared/components/tabs";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

interface HomeChartsProps {
  isAuthorized: boolean;
}

export const HomeCharts = ({ isAuthorized }: HomeChartsProps) => {
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
          content: <HomeChartsPricing isAuthorized={isAuthorized} />,
        },
      ]}
      defaultValue="overview"
    />
  );
};
