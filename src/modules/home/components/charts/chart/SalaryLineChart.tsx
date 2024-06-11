import { BadgeRussianRuble } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colors } from "../../../../../../tailwind.config";
import { LastResumesApiTypeInput } from "../../../../resume/list";
import { homeChartSalaryConfig } from "../../../../shared/configs";
import { mapResumesToLineChartData } from "../../../utils/mapResumesToLineChartData";
import { LineChartHeader } from "./header/LineChartHeader";

interface LineChartProps {
  lastResumes: LastResumesApiTypeInput[];
  numDays: number;
}

export const SalaryLineChart = ({ lastResumes, numDays }: LineChartProps) => {
  const chartData = mapResumesToLineChartData(lastResumes, numDays);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white bg-clip-border shadow-md">
      <LineChartHeader
        title={
          <span>
            График желаемой зарплаты, указанной в опубликованных резюме по дням за период{" "}
            <strong className="text-nowrap">( {numDays} дней )</strong>
          </span>
        }
        description="Указана средняя максимальная/минимальная/средняя зарплата за день по всем резюме"
        icon={BadgeRussianRuble}
      />

      <ResponsiveContainer height={300} className="px-6">
        <AreaChart data={chartData}>
          <XAxis
            dataKey="title"
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <YAxis
            unit="₽"
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
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
              name={series.name}
              unit={series.unit}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
