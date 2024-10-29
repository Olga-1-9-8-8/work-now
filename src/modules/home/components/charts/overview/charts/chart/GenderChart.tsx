import { useMemo } from "react";
import { FaPeopleArrows } from "react-icons/fa6";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { colors } from "../../../../../../../../tailwind.config";
import { LanguageType } from "../../../../../../shared/configs";
import { useLanguageSwitcher } from "../../../../../../shared/widgets/languages-switcher";
import { UniversalItemAnalyticsApiTypeInput } from "../../../../../types/UniversalItemAnalyticsApiTypeInput";
import { mapItemsToGenderChartData } from "../../../../../utils/mappers/mapItemsToGenderChartData";
import { ChartNotExist } from "./blocks/ChartNotExist";
import { ChartWrapper } from "./blocks/ChartWrapper";

const RADIAN = Math.PI / 180;

interface LineChartProps {
  title: string;
  description?: string;
  items?: UniversalItemAnalyticsApiTypeInput[];
  numDays: number;
  isLoading?: boolean;
}

export const GenderChart = ({ items, numDays, title, description, isLoading }: LineChartProps) => {
  const { language } = useLanguageSwitcher("home");

  const chartData = useMemo(() => {
    if (!items || items.length === 0) return null;
    return mapItemsToGenderChartData(items, language as LanguageType);
  }, [items, language]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: Required<PieSectorDataItem>) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ChartWrapper
      icon={FaPeopleArrows}
      title={title}
      description={description}
      isLoading={isLoading}
      numDays={numDays}
    >
      {chartData ? (
        <PieChart>
          <Pie
            dataKey="value"
            nameKey="title"
            data={chartData}
            outerRadius={105}
            paddingAngle={1}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            <Cell fill={colors.primary.dark} stroke={colors.primary.light} />
            <Cell fill={colors.primary.light} stroke={colors.primary.dark} />
          </Pie>
          <Tooltip />
          <Legend iconType="circle" />
        </PieChart>
      ) : (
        <ChartNotExist />
      )}
    </ChartWrapper>
  );
};
