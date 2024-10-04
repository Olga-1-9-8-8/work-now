import { Tabs } from "../../../shared/components/tabs";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

export const HomeCharts = () => {
  const { t } = useLanguageSwitcher("home");
  return (
    <Tabs
      tabs={[
        {
          value: "overview",
          title: t("home.charts.overview.title"),
          content: <HomeChartsOverview />,
        },
        {
          value: "pricing",
          title: t("home.charts.pricing.title"),
          content: <HomeChartsPricing />,
        },
      ]}
      defaultValue="overview"
    />
  );
};
