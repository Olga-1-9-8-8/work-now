import { useState } from "react";
import { SearchOptionsItemOption } from "../../../configs/searchOptionsConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select/Select";

interface FiltersSelectProps {
  title: string;
  options: SearchOptionsItemOption[];
}

export const FiltersSelect = ({ title, options }: FiltersSelectProps) => {
  const [value, setValue] = useState("");
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full sm:w-[280px]">
        <SelectValue placeholder={title} aria-label={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
