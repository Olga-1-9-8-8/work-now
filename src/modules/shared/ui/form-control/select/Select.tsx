import { SelectProps as SelectBaseProps } from "@radix-ui/react-select";

import { UniversalItemType } from "../../../types";
import {
  Select as SelectBase,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select/Select";

interface SelectProps extends SelectBaseProps {
  title: string;
  options: Required<UniversalItemType<string>>[];
}

export const Select = ({ title, options, value, ...props }: SelectProps) => {
  return (
    <SelectBase value={value} {...props}>
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
    </SelectBase>
  );
};
