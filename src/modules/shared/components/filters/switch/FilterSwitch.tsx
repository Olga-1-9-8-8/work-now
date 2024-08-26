import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useUrl } from "../../../hooks/useUrl";
import { UniversalItemType } from "../../../types";
import { SwitchWithLabel } from "../../../ui/switch/SwitchWithLabel";

type FilterSwitchProps = {
  filteredField: string;
  option: Required<UniversalItemType<string>>;
} & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const FilterSwitch = ({ option, filteredField, ...props }: FilterSwitchProps) => {
  const { removeParam, setParam, getParam } = useUrl();

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      setParam(filteredField, option.value);
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
