import { Briefcase, Clock, Coins } from "lucide-react";
import { EmploymentType, ScheduleType, WeekHoursType } from "../../../../types";
import { CardContent } from "../../../../ui/card/Card";
import {
  getBadgeDataByEmploymentType,
  getBadgeDataByScheduleType,
  getSalaryTitle,
} from "../../../../utils";
import { getBadgesTitle } from "../../../../utils/getBadgesTitle";
import { SearchCardItemInsight } from "../item/SearchCardItemInsight";

interface SearchCardDetailsBlockProps {
  salary?: number[];
  employment?: EmploymentType[] | EmploymentType;
  schedule?: ScheduleType | WeekHoursType[];
}

export const SearchCardDetailsBlock = ({
  salary,
  employment,
  schedule,
}: SearchCardDetailsBlockProps) => {
  return (
    <CardContent>
      <ul className="flex flex-col flex-wrap gap-8 lg:flex-row lg:gap-5">
        <li className="flex-1">
          <SearchCardItemInsight
            icon={Coins}
            badges={[{ title: getSalaryTitle(salary) }]}
            title="Зарплата"
          />
        </li>
        {schedule && (
          <li className="flex-1">
            <SearchCardItemInsight
              icon={Clock}
              badges={getBadgesTitle(schedule)}
              getBadgeData={getBadgeDataByScheduleType}
              title="График работы"
            />
          </li>
        )}
        {employment && (
          <li className="flex-1">
            <SearchCardItemInsight
              icon={Briefcase}
              badges={getBadgesTitle(employment)}
              getBadgeData={getBadgeDataByEmploymentType}
              title="Тип работы"
            />
          </li>
        )}
      </ul>
    </CardContent>
  );
};
