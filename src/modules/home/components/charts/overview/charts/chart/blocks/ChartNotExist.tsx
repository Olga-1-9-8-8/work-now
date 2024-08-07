import { AnalyticsIcon } from "../../../../../../../shared/ui/icons";
import { TypographyH5 } from "../../../../../../../shared/ui/typography/TypographyH5";

export const ChartNotExist = () => (
  <div className="flex h-full flex-col justify-center gap-4">
    <div className="w-full">
      <AnalyticsIcon className="h-36 w-full" />
    </div>
    <TypographyH5>Нет данных для этого графика</TypographyH5>
  </div>
);
