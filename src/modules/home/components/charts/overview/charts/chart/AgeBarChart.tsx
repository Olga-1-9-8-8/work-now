import { useMemo } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { colors } from "../../../../../../../../tailwind.config";
import { LanguageType } from "../../../../../../shared/configs";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher";
import { UniversalItemAnalyticsApiTypeInput } from "../../../../../types/UniversalItemAnalyticsApiTypeInput";
import { mapItemsToAgeChartData } from "../../../../../utils/mappers/mapItemsToAgeChartData";
import { ChartNotExist } from "./blocks/ChartNotExist";
import { ChartWrapper } from "./blocks/ChartWrapper";

interface LineChartProps {
  title: string;
  description?: string;
  items?: UniversalItemAnalyticsApiTypeInput[];
  numDays: number;
  isLoading?: boolean;
}

export const AgeBarChart = ({ items, numDays, title, description, isLoading }: LineChartProps) => {
  const { t, language } = useLanguageSwitcher("home");

  const chartData = useMemo(() => {
    if (!items || items.length === 0) return null;
    return mapItemsToAgeChartData(items, language as LanguageType);
  }, [items, language]);

  return (
    <ChartWrapper
      icon={FaPeopleRoof}
      title={title}
      description={description}
      isLoading={isLoading}
      numDays={numDays}
    >
      {chartData ? (
        <BarChart data={chartData}>
          <XAxis
            dataKey="title"
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <YAxis
            unit={` ${t("home.charts.age.unit")}`}
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <Tooltip
            contentStyle={{
              opacity: 0.95,
              color: colors.primary.dark,
            }}
          />
          <Bar
            dataKey="value"
            name={t("home.charts.age.tooltipTitle")}
            fill={colors.primary.extraDark}
            unit={` ${t("home.charts.age.unit")}`}
          />
        </BarChart>
      ) : (
        <ChartNotExist />
      )}
    </ChartWrapper>
  );
};
