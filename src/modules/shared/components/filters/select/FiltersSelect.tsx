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
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={title} />
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
