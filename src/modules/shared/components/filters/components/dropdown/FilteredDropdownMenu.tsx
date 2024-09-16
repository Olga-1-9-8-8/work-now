import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useUrl } from "../../../../hooks";
import { UniversalItemType } from "../../../../types";
import { Button } from "../../../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../../ui/dropdown-menu/DropdownMenu";
import { getDropdownMenuTitle } from "../../utils/getDropdownMenuTitle";

interface FilteredDropdownMenuProps {
  sortedField: string;
  options: Required<UniversalItemType<string>>[];
}

export const FilteredDropdownMenu = ({ sortedField, options }: FilteredDropdownMenuProps) => {
  const { getParam, setParam } = useUrl();

  const initialValue = getParam(sortedField) || options[0].value;
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    setCurrentValue(initialValue);
  }, [initialValue]);

  const handleChange = (value: string) => {
    setCurrentValue(value);
    setParam(sortedField, value);
    setParam("offset", "1");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-1 p-2 text-primary-extraDark">
          {getDropdownMenuTitle(currentValue, options)} <ChevronDown size={19} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuRadioGroup value={currentValue} onValueChange={handleChange}>
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
