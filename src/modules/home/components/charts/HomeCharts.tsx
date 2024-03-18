import { LineChart } from "../../../shared/ui/charts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../shared/ui/tabs/Tabs";
import { HomeChartsOverview } from "./overview/HomeChartsOverview";
import { HomeChartsPricing } from "./pricing/HomeChartsPricing";

export const HomeCharts = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Графики аналитики</TabsTrigger>
        <TabsTrigger value="pricing">Цена для компаний</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <HomeChartsOverview />
        <LineChart />
      </TabsContent>
      <TabsContent value="pricing">
        <HomeChartsPricing />
      </TabsContent>
    </Tabs>
  );
};
