import { SelectProps } from "@radix-ui/react-select";
import { SearchOptionsItemOption } from "../../configs/searchOptionsConfig";
import { useUrl } from "../../hooks";
import { Select } from "../../ui/form-control";

interface FiltersSelectProps extends SelectProps {
  filteredField: string;
  title: string;
  options: SearchOptionsItemOption<string>[];
}

export const FilterSelect = ({ title, options, filteredField, ...props }: FiltersSelectProps) => {
  const { getParam, setParam } = useUrl();

  const handleChange = (value: string) => {
    setParam(filteredField, value, { replace: true });
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
