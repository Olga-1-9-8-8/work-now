import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { SearchOptionsItemOption } from "../../configs/searchOptionsConfig";
import { Button } from "../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu/DropdownMenu";

interface FilteredDropdownMenuProps {
  title: string;
  sortedField: string;
  options: SearchOptionsItemOption<string>[];
}

export const FilteredDropdownMenu = ({
  title,
  sortedField,
  options,
}: FilteredDropdownMenuProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    searchParams.set(sortedField, value);
    setSearchParams(searchParams);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-1 p-2 text-primary-extraDark">
          {title} <ChevronDown size={19} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={searchParams.get(sortedField) || options[0].value}
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
