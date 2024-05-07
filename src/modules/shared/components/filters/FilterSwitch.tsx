import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useSearchParams } from "react-router-dom";
import { SearchOptionsItemOption } from "../../configs/searchOptionsConfig";
import { SwitchWithLabel } from "../../ui/switch/SwitchWithLabel";

type FilterSwitchProps = {
  filteredField: string;
  option: SearchOptionsItemOption<string>;
} & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const FilterSwitch = ({ option, filteredField, ...props }: FilterSwitchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      searchParams.set(filteredField, option.value);
      searchParams.set("offset", "1");
    } else {
      searchParams.delete(filteredField);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <SwitchWithLabel
      checked={searchParams.get(filteredField) === option.value}
      onCheckedChange={handleCheckedChange}
      label={option.title}
      {...props}
    />
  );
};
