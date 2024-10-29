import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { colors } from "../../../../../../../../tailwind.config";
import {
  LanguageType,
  currencyConfigs,
  homeChartSalaryConfig,
} from "../../../../../../shared/configs";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher";
import { UniversalItemAnalyticsApiTypeInput } from "../../../../../types/UniversalItemAnalyticsApiTypeInput";
import { mapItemsToSalaryLineChartData } from "../../../../../utils/mappers/mapItemsToSalaryLineChartData";
import { ChartNotExist } from "./blocks/ChartNotExist";
import { ChartWrapper } from "./blocks/ChartWrapper";

interface LineChartProps {
  title: string;
  description?: string;
  items?: UniversalItemAnalyticsApiTypeInput[];
  numDays: number;
  isLoading?: boolean;
}

export const SalaryLineChart = ({
  items,
  numDays,
  title,
  description,
  isLoading,
}: LineChartProps) => {
  const { language } = useLanguageSwitcher("home");
  const chartData = useMemo(() => {
    if (!items || items.length === 0) return null;
    return mapItemsToSalaryLineChartData(items, numDays, language as LanguageType);
  }, [items, language, numDays]);

  return (
    <ChartWrapper
      icon={currencyConfigs[language as LanguageType].icon}
      title={title}
      description={description}
      isLoading={isLoading}
      numDays={numDays}
    >
      {chartData ? (
        <AreaChart data={chartData}>
          <XAxis
            dataKey="title"
            tick={{ fill: colors.primary.dark, fontSize: 13 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <YAxis
            unit={currencyConfigs[language as LanguageType].title}
            tick={{ fill: colors.primary.dark, fontSize: 13 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip
            contentStyle={{
              opacity: 0.75,
              color: colors.primary.dark,
            }}
          />
          {homeChartSalaryConfig.map((series, index) => (
            <Area
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              dataKey={series.dataKey}
              type="monotone"
              stroke={series.stroke}
              fill={series.fill}
              strokeWidth={3}
              name={series.name[language as LanguageType]}
              unit={currencyConfigs[language as LanguageType].title}
            />
          ))}
        </AreaChart>
      ) : (
        <ChartNotExist />
      )}
    </ChartWrapper>
  );
};
