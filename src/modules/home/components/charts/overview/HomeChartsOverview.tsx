import { chartOverviewConfig } from "../../../../shared/configs";
import { HomeChartsOverviewCard } from "./card/HomeChartsOverviewCard";

export const HomeChartsOverview = () => {
  return (
    <ul className="grid gap-6 py-4 md:grid-cols-2 lg:grid-cols-4">
      {chartOverviewConfig.map((item) => (
        <HomeChartsOverviewCard
          key={item.title}
          contentDescription={item.contentDescription}
          contentTitle={item.contentTitle}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </ul>
  );
};
