import { Tabs } from "../../../shared/components/tabs";
import { useResponsiveContext } from "../../../shared/responsive";
import { LineChart } from "../../../shared/ui/charts/LineChart";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

export const HomeCharts = () => {
  const isMobile = useResponsiveContext();

  return (
    <Tabs
      tabs={[
        {
          value: "overview",
          title: "Графики аналитики",
          content: (
            <div className="flex flex-col gap-10">
              <HomeChartsOverview />
              {!isMobile && (
                <LineChart
                  title="Динамика количества опубликованных вакансий"
                  description="Посмотри динамику вакансий за прошлый год"
                />
              )}
            </div>
          ),
        },
        { value: "pricing", title: "Цена для компаний", content: <HomeChartsPricing /> },
      ]}
      defaultValue="overview"
    />
  );
};
