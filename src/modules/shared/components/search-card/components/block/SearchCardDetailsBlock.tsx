import { Briefcase, Clock, Coins } from "lucide-react";
import {
  EmploymentType,
  ScheduleType,
  WeekHoursType,
} from "../../../../configs/searchOptionsConfig";
import { CardContent } from "../../../../ui/card/Card";
import { getBadgeVariantByEmploymentType } from "../../utils/getBadgeVariantByEmploymentType";
import { getBadgeVariantByScheduleType } from "../../utils/getBadgeVariantByScheduleType";
import { getBadgesTitle } from "../../utils/getBadgesTitle";
import { getSalaryBadge } from "../../utils/getSalaryBadge";
import { SearchCardItemInsight } from "../item/SearchCardItemInsight";

interface SearchCardDetailsBlockProps {
  salary: number[];
  employment: EmploymentType[] | EmploymentType;
  schedule: ScheduleType | WeekHoursType[];
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
            badges={[{ title: getSalaryBadge(salary) }]}
            title="Зарплата"
          />
        </li>
        <li className="flex-1">
          <SearchCardItemInsight
            icon={Clock}
            badges={getBadgesTitle(schedule)}
            getBadgeData={getBadgeVariantByScheduleType}
            title="График работы"
          />
        </li>
        <li className="flex-1">
          <SearchCardItemInsight
            icon={Briefcase}
            badges={getBadgesTitle(employment)}
            getBadgeData={getBadgeVariantByEmploymentType}
            title="Тип работы"
          />
        </li>
      </ul>
    </CardContent>
  );
};
