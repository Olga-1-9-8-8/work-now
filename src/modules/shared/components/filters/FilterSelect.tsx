import { SelectProps } from "@radix-ui/react-select";
import { useUrl } from "../../hooks";
import { UniversalItemType } from "../../types";
import { Select } from "../../ui/form-control";

interface FiltersSelectProps extends SelectProps {
  filteredField: string;
  title: string;
  options: Required<UniversalItemType<string>>[];
}

export const FilterSelect = ({ title, options, filteredField, ...props }: FiltersSelectProps) => {
  const { getParam, setParam } = useUrl();

  const handleChange = (value: string) => {
    setParam(filteredField, value);
    setParam("offset", "1");
  };

  return (
    <Select
      value={getParam(filteredField) || undefined}
      onValueChange={handleChange}
      title={title}
      options={options}
      {...props}
    />
  );
};
