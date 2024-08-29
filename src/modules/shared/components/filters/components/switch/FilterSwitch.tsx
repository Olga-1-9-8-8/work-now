import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useCallback, useMemo } from "react";
import { useUrl } from "../../../../hooks/useUrl";
import { UniversalItemType } from "../../../../types";
import { SwitchWithLabel } from "../../../../ui/switch/SwitchWithLabel";
import { updateSelectedValues } from "../../utils/updateSelectedValues";

type FilterSwitchProps = {
  filteredField: string;
  option: Required<UniversalItemType<string>>;
} & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const FilterSwitch = ({ option, filteredField, ...props }: FilterSwitchProps) => {
  const { setParam, getParam } = useUrl();
  const selectedValues = useMemo(
    () => getParam(filteredField)?.split(",") ?? [],
    [getParam, filteredField],
  );

  const handleToggle = useCallback(() => {
    const newValues = updateSelectedValues(option.value, selectedValues);
    setParam(filteredField, newValues.join(","));
    setParam("offset", "1");
  }, [option.value, selectedValues, setParam, filteredField]);

  return (
    <SwitchWithLabel
      checked={selectedValues.includes(option.value)}
      onCheckedChange={handleToggle}
      label={option.title}
      {...props}
    />
  );
};
