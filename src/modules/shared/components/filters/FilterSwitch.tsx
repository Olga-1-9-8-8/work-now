import * as SwitchPrimitives from "@radix-ui/react-switch";
import { SearchOptionsItemOption } from "../../configs/searchOptionsConfig";
import { useUrl } from "../../hooks/useUrl";
import { SwitchWithLabel } from "../../ui/switch/SwitchWithLabel";

type FilterSwitchProps = {
  filteredField: string;
  option: SearchOptionsItemOption<string>;
} & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const FilterSwitch = ({ option, filteredField, ...props }: FilterSwitchProps) => {
  const { removeParam, setParam, getParam } = useUrl();

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      setParam(filteredField, option.value, { replace: true });
      setParam("offset", "1");
    } else {
      removeParam(filteredField);
    }
  };

  return (
    <SwitchWithLabel
      checked={getParam(filteredField) === option.value}
      onCheckedChange={handleCheckedChange}
      label={option.title}
      {...props}
    />
  );
};
