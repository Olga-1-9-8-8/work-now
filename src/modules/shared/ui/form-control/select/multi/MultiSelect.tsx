import { useEffect, useState } from "react";
import { UniversalItemType } from "../../../../types";
import { MultiSelectCombobox } from "./MultiSelectCombobox";
import { MultiSelectPopover } from "./MultiSelectPopover";

interface MultiSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: Required<UniversalItemType<string>>[];
  onValueChange: (value: string[]) => void;
  defaultValue: string[];
  placeholder: string;
  withSearch?: boolean;
  variant?: "popover" | "list";
  className?: string;
}

export const MultiSelect = ({
  variant = "popover",
  options,
  onValueChange,
  defaultValue = [],
  placeholder,
  className,
  withSearch = false,
  ...props
}: MultiSelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(() => defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    setSelectedValues(defaultValue);
  }, [defaultValue]);

  const handleSelectedValuesChange = (newSelectedValues: string[]) => {
    setSelectedValues(newSelectedValues);
  };

  const renderMultiSelectCombobox = () => (
    <MultiSelectCombobox
      options={options}
      withSearch={withSearch}
      selectedValues={selectedValues}
      onSelectedValuesChange={handleSelectedValuesChange}
      onValueChange={onValueChange}
      onSetIsPopoverOpen={setIsPopoverOpen}
      variant={variant}
    />
  );

  if (variant === "popover") {
    return (
      <MultiSelectPopover
        placeholder={placeholder}
        count={selectedValues.length}
        onSetIsPopoverOpen={setIsPopoverOpen}
        isPopoverOpen={isPopoverOpen}
        className={className}
        {...props}
      >
        {renderMultiSelectCombobox()}
      </MultiSelectPopover>
    );
  }

  return renderMultiSelectCombobox();
};

MultiSelect.displayName = "MultiSelect";
