import { Users2Icon } from "lucide-react";
import Chart from "react-apexcharts";
import { TypographyH6 } from "../typography/TypographyH6";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [
      "Апр 23",
      "Май 23",
      "Июн 23",
      "Июл 23",
      "Авг 23",
      "Сент 23",
      "Окт 23",
      "Ноя 23",
      "Дек 23",
      "Янв 24",
      "Фев 24",
      "Мар 24",
    ],
  },

  colors: ["#56299e", "#E91E63"],
};

const series = [
  {
    name: "Количество вакансий",
    data: [
      35_250, 34_840, 35_440, 35_100, 35_125, 37_100, 32_540, 35_440, 35_100, 35_125, 36_125,
      36_500,
    ],
  },
];

interface LineChartProps {
  title: string;
  description?: string;
}

export const LineChart = ({ title, description }: LineChartProps) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md">
      <div className="relative mx-4 mt-4 flex flex-col justify-center gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-primary-extraDark shadow-none md:flex-row md:items-center">
        <div className="w-max rounded-full bg-primary-extraDark p-5 text-white">
          <Users2Icon />
        </div>
        <div>
          <TypographyH6 className="antialiased">{title}</TypographyH6>
          <p className="block max-w-sm font-sans text-sm font-normal leading-normal text-muted-foreground antialiased">
            {description}
          </p>
        </div>
      </div>
      <div className="px-2 pb-0 pt-6">
        <div className="flex justify-center">
          <Chart options={options} series={series} type="bar" width="700" />
        </div>
      </div>
    </div>
  );
};
