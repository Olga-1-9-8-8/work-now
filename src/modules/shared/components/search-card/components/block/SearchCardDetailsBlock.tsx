import { Briefcase, Clock, Clock5Icon, Coins } from "lucide-react";
import { LanguageType } from "../../../../configs";
import { EmploymentType, ScheduleType, WeekHoursType } from "../../../../types";
import { CardContent } from "../../../../ui/card/Card";
import {
  getBadgeDataByEmploymentType,
  getBadgeDataByScheduleType,
  getBadgeDataByWeekHours,
  getBadgesTitle,
  getSalaryTitle,
} from "../../../../utils";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { CardItemInsight } from "../../../card";

interface SearchCardDetailsBlockProps {
  salary?: number[];
  employment?: EmploymentType[];
  schedule?: ScheduleType[];
  weekHours?: WeekHoursType[];
}

export const SearchCardDetailsBlock = ({
  salary,
  employment,
  schedule,
  weekHours,
}: SearchCardDetailsBlockProps) => {
  const { language, t } = useLanguageSwitcher("shared");

  return (
    <CardContent className="space-y-8">
      <ul className="flex flex-col flex-wrap gap-8 lg:flex-row lg:gap-5">
        <li className="flex-1">
          <CardItemInsight
            icon={Coins}
            badges={[{ title: getSalaryTitle(language as LanguageType, salary) }]}
            title={t("shared.details.card.salary.salary")}
          />
        </li>
        {schedule && (
          <li className="flex-1">
            <CardItemInsight
              icon={Clock}
              badges={getBadgesTitle(schedule)}
              getBadgeData={(title) => getBadgeDataByScheduleType(language as LanguageType, title)}
              title={t("shared.details.card.employment.schedule.title")}
            />
          </li>
        )}
        {employment && (
          <li className="flex-1">
            <CardItemInsight
              icon={Briefcase}
              badges={getBadgesTitle(employment)}
              getBadgeData={(title) =>
                getBadgeDataByEmploymentType(language as LanguageType, title)
              }
              title={t("shared.details.card.employment.title")}
            />
          </li>
        )}
      </ul>
      {weekHours?.length !== undefined && weekHours?.length > 0 && (
        <div>
          <CardItemInsight
            icon={Clock5Icon}
            badges={getBadgesTitle(weekHours)}
            getBadgeData={(title) => getBadgeDataByWeekHours(language as LanguageType, title)}
            title={t("shared.details.card.employment.weekHours.titleFull")}
          />
        </div>
      )}
    </CardContent>
  );
};
