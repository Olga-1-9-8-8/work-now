import { useResponsiveContext } from "../../../shared/responsive";
import { LineChart } from "../../../shared/ui/charts/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../shared/ui/tabs/Tabs";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

export const HomeCharts = () => {
  const isMobile = useResponsiveContext();

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Графики аналитики</TabsTrigger>
        <TabsTrigger value="pricing">Цена для компаний</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="flex flex-col gap-10">
        <HomeChartsOverview />
        {!isMobile && (
          <LineChart
            title="Динамика количества опубликованных вакансий"
            description="Посмотри динамику вакансий за прошлый год"
          />
        )}
      </TabsContent>
      <TabsContent value="pricing">
        <HomeChartsPricing />
      </TabsContent>
    </Tabs>
  );
};
