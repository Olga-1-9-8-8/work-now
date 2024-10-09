import { useLastResumesAnalytics } from "../../../../hooks/useLastResumesAnalytics";
import { HomeChartsOverviewCard } from "./card/HomeChartsOverviewCard";
import { useCartCardData } from "./hooks/useCartCardData";

export const HomeChartsOverviewCards = () => {
  const chartCardData = useCartCardData();
  const { lastResumes, isLoading } = useLastResumesAnalytics();

  return (
    <ul className="grid min-h-full gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4">
      {chartCardData.map(({ title, icon, valueFn }) => (
        <li key={title}>
          <HomeChartsOverviewCard
            value={valueFn(lastResumes)}
            icon={icon}
            title={title}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ul>
  );
};
