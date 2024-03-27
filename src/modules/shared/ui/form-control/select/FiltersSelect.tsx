import { SelectProps } from "@radix-ui/react-select";
import { SearchOptionsItemOption } from "../../../configs/searchOptionsConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select/Select";

interface FiltersSelectProps extends SelectProps {
  title: string;
  options: SearchOptionsItemOption[];
}

export const FiltersSelect = ({ title, options, value, ...props }: FiltersSelectProps) => {
  return (
    <Select value={value} {...props}>
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
