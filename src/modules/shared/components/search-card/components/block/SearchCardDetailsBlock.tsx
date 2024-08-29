import { Briefcase, Clock, Clock5Icon, Coins } from "lucide-react";
import { EmploymentType, ScheduleType, WeekHoursType } from "../../../../types";
import { CardContent } from "../../../../ui/card/Card";
import {
  getBadgeDataByEmploymentType,
  getBadgeDataByScheduleType,
  getBadgeDataByWeekHours,
  getBadgesTitle,
  getSalaryTitle,
} from "../../../../utils";
import { CardItemInsight } from "../../../card";

interface SearchCardDetailsBlockProps {
  salary?: number[];
  employment?: EmploymentType[] | string;
  schedule?: ScheduleType[] | string;
  weekHours?: WeekHoursType[];
}

export const SearchCardDetailsBlock = ({
  salary,
  employment,
  schedule,
  weekHours,
}: SearchCardDetailsBlockProps) => {
  return (
    <CardContent className="space-y-8">
      <ul className="flex flex-col flex-wrap gap-8 lg:flex-row lg:gap-5">
        <li className="flex-1">
          <CardItemInsight
            icon={Coins}
            badges={[{ title: getSalaryTitle(salary) }]}
            title="Зарплата"
          />
        </li>
        {schedule && (
          <li className="flex-1">
            <CardItemInsight
              icon={Clock}
              badges={getBadgesTitle(schedule)}
              getBadgeData={getBadgeDataByScheduleType}
              title="График работы"
            />
          </li>
        )}
        {employment && (
          <li className="flex-1">
            <CardItemInsight
              icon={Briefcase}
              badges={getBadgesTitle(employment)}
              getBadgeData={getBadgeDataByEmploymentType}
              title="Тип работы"
            />
          </li>
        )}
      </ul>
      {weekHours?.length !== undefined && weekHours?.length > 0 && (
        <div>
          <CardItemInsight
            icon={Clock5Icon}
            badges={getBadgesTitle(weekHours)}
            getBadgeData={getBadgeDataByWeekHours}
            title="Количество часов в неделю"
          />
        </div>
      )}
    </CardContent>
  );
};
