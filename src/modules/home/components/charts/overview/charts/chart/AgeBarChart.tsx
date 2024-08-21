import { useMemo } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { colors } from "../../../../../../../../tailwind.config";
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
  const chartData = useMemo(() => {
    if (!items || items.length === 0) return null;
    return mapItemsToAgeChartData(items);
  }, [items]);

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
            unit=" чел."
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <Tooltip
            contentStyle={{
              opacity: 0.95,
              color: colors.primary.dark,
            }}
          />
          <Bar dataKey="value" name="Кол-во" fill={colors.primary.extraDark} unit=" чел." />
        </BarChart>
      ) : (
        <ChartNotExist />
      )}
    </ChartWrapper>
  );
};
