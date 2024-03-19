import { Briefcase, Clock, Coins } from "lucide-react";
import { getSalaryBadge } from "../../utils/getSalaryBadge";
import { getVariantBySchedule } from "../../utils/getVariantBySchedule";
import { SearchCardItemInsight } from "../item/SearchCardItemInsight";

interface SearchCardDetailsBlockProps {
  salary: string[];
  employment: string;
  schedule: string;
}

export const SearchCardDetailsBlock = ({
  salary,
  employment,
  schedule,
}: SearchCardDetailsBlockProps) => {
  return (
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
          badges={[{ title: employment }]}
          title="График работы"
        />
      </li>
      <li className="flex-1">
        <SearchCardItemInsight
          icon={Briefcase}
          badges={[{ title: schedule, variant: getVariantBySchedule(schedule) }]}
          title="Тип работы"
        />
      </li>
    </ul>
  );
};
