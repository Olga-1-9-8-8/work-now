import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../shared/ui/buttons/Button";

interface HomeSearchBarSearchersItemProps {
  title: string;
  code?: number;
}

export const HomeSearchBarSearchersItem = ({ title, code }: HomeSearchBarSearchersItemProps) => {
  return (
    <li>
      <Button asChild className="bg-primary-extraDark hover:bg-primary-extraDark/90">
        <Link to={code?.toString() ?? "/home"} className="flex gap-2">
          <Search className="stroke-success stroke-2" />
          <span className="font-semibold">{title}</span>
        </Link>
      </Button>
    </li>
  );
};
