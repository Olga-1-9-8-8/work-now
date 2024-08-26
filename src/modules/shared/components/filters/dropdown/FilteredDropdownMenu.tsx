import { ChevronDown } from "lucide-react";
import { useUrl } from "../../../hooks";
import { UniversalItemType } from "../../../types";
import { Button } from "../../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu/DropdownMenu";

interface FilteredDropdownMenuProps {
  title: string;
  sortedField: string;
  options: Required<UniversalItemType<string>>[];
}

export const FilteredDropdownMenu = ({ sortedField, options }: FilteredDropdownMenuProps) => {
  const { getParam, setParam } = useUrl();

  const handleChange = (value: string) => {
    setParam(sortedField, value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-1 p-2 text-primary-extraDark">
          {options[0].title} <ChevronDown size={19} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={getParam(sortedField) || options[0].value}
          onValueChange={handleChange}
        >
          {options.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.value}>
              {item.title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
