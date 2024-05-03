import { SelectProps } from "@radix-ui/react-select";
import { useSearchParams } from "react-router-dom";
import { SearchOptionsItemOption } from "../../configs/searchOptionsConfig";
import { Select } from "../../ui/form-control";

interface FiltersSelectProps extends SelectProps {
  filteredField: string;
  title: string;
  options: SearchOptionsItemOption<string>[];
}

export const FilterSelect = ({ title, options, filteredField, ...props }: FiltersSelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fieldValue = searchParams.get(filteredField);

  const handleChange = (value: string) => {
    searchParams.set(filteredField, value);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Select
      value={fieldValue || undefined}
      onValueChange={handleChange}
      title={title}
      options={options}
      {...props}
    />
  );
};
