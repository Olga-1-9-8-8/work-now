import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { UniversalItemType } from "../../../../../shared/types";
import { Button } from "../../../../../shared/ui/buttons/Button";

interface HomeSearchBarSearchersItemProps {
  title: string;
  item: UniversalItemType;
}

export const HomeSearchBarSearchersItem = ({ title, item }: HomeSearchBarSearchersItemProps) => {
  return (
    <li className="flex-1">
      <Button asChild className="w-full bg-primary-extraDark hover:bg-primary-extraDark/90">
        <Link to={`/vacancies?${title}=${item.value}`} className="flex gap-2">
          <Search className="stroke-success stroke-2" />
          <span className="font-semibold">{item.title}</span>
        </Link>
      </Button>
    </li>
  );
};
