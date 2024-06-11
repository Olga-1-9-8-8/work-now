import { FaPeopleRoof } from "react-icons/fa6";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { colors } from "../../../../../../tailwind.config";
import { LastResumesApiTypeInput } from "../../../../resume/list";
import { mapResumesToAgeChartData } from "../../../utils/mapResumesToAgeChartData";
import { LineChartHeader } from "./header/LineChartHeader";

interface LineChartProps {
  lastResumes: LastResumesApiTypeInput[];
  numDays: number;
}

export const AgeBarChart = ({ lastResumes, numDays }: LineChartProps) => {
  const chartData = mapResumesToAgeChartData(lastResumes);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white bg-clip-border shadow-md ">
      <LineChartHeader
        title={
          <span>
            Средний возраст соискателей в опубликованных резюме за период в{" "}
            <strong className="text-nowrap">{numDays} дней</strong>
          </span>
        }
        icon={FaPeopleRoof}
      />

      <ResponsiveContainer height={300} className="px-6">
        <BarChart data={chartData}>
          <XAxis
            dataKey="title"
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <YAxis
            unit="чел."
            tick={{ fill: colors.primary.dark, fontSize: 14 }}
            tickLine={{ stroke: colors.primary.dark }}
          />
          <Tooltip
            contentStyle={{
              opacity: 0.95,
              color: colors.primary.dark,
            }}
          />
          <Bar dataKey="value" name="Кол-во" fill={colors.primary.extraDark} unit="чел." />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
