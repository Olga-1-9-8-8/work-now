import { ElementType, ReactElement } from "react";
import { ResponsiveContainer } from "recharts";
import { Spinner } from "../../../../../../../shared/ui/spinner/Spinner";
import { ChartHeader } from "../header/ChartHeader";

interface ChartWrapperProps {
  title: string;
  description?: string;
  children: ReactElement;
  numDays: number;
  isLoading?: boolean;
  icon?: ElementType;
}

export const ChartWrapper = ({
  children,
  numDays,
  title,
  description,
  isLoading,
  icon,
}: ChartWrapperProps) => (
  <div className="flex flex-col gap-6 rounded-xl bg-white bg-clip-border shadow-md">
    <ChartHeader
      title={
        <span>
          {title} <strong className="text-nowrap">( {numDays} дней )</strong>
        </span>
      }
      description={description}
      icon={icon}
    />

    <ResponsiveContainer height={300} className="px-6">
      {isLoading ? <Spinner /> : children}
    </ResponsiveContainer>
  </div>
);
