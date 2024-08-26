import { SelectProps } from "@radix-ui/react-select";
import { useUrl } from "../../../hooks";
import { UniversalItemType } from "../../../types";
import { MultiSelect } from "../../../ui/form-control/select/MultiSelect";

interface FiltersSelectProps extends SelectProps {
  filteredField: string;
  title: string;
  options: Required<UniversalItemType<string>>[];
}

export const FilterSelect = ({ title, options, filteredField }: FiltersSelectProps) => {
  const { getParam, setParam } = useUrl();

  const handleChange = (value: string[]) => {
    setParam(filteredField, value.join(","));
    setParam("offset", "1");
  };

  return (
    <MultiSelect
      options={options}
      placeholder={title}
      onValueChange={handleChange}
      defaultValue={getParam(filteredField)?.split(",") ?? []}
    />
  );
};
