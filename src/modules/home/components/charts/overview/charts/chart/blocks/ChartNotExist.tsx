import { useTranslation } from "react-i18next";
import { AnalyticsIcon } from "../../../../../../../shared/ui/icons";
import { TypographyH5 } from "../../../../../../../shared/ui/typography/TypographyH5";

export const ChartNotExist = () => {
  const { t } = useTranslation("home");

  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="w-full">
        <AnalyticsIcon className="h-36 w-full" />
      </div>
      <TypographyH5>{t("home.charts.chartNotExist")}</TypographyH5>
    </div>
  );
};
