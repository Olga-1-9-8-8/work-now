import { FaPeopleArrows } from "react-icons/fa6";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { colors } from "../../../../../../../../tailwind.config";
import { UniversalItemAnalyticsApiTypeInput } from "../../../../../types/UniversalItemAnalyticsApiTypeInput";
import { mapItemsToGenderChartData } from "../../../../../utils/mappers/mapItemsToGenderChartData";
import { LineChartHeader } from "../header/LineChartHeader";

const RADIAN = Math.PI / 180;

interface LineChartProps {
  title: string;
  description?: string;
  items: UniversalItemAnalyticsApiTypeInput[];
  numDays: number;
}

export const GenderChart = ({ items, numDays, title, description }: LineChartProps) => {
  const chartData = mapItemsToGenderChartData(items);

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
    <div className="flex flex-col gap-6 rounded-xl bg-white bg-clip-border shadow-md ">
      <LineChartHeader
        title={
          <span>
            {title} <strong className="text-nowrap">{numDays} дней</strong>
          </span>
        }
        description={description}
        icon={FaPeopleArrows}
      />

      <ResponsiveContainer height={300} className="px-6">
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
      </ResponsiveContainer>
    </div>
  );
};
