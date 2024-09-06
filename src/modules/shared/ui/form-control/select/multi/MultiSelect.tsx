import { useEffect, useState } from "react";
import { UniversalItemType } from "../../../../types";
import { MultiSelectPopover } from "./MultiSelectPopover";
import { MultiSelectCombobox } from "./combobox/MultiSelectCombobox";

interface MultiSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: Required<UniversalItemType<string>>[];
  onValueChange: (value: string[]) => void;
  defaultValue: string[];
  placeholder?: string;
  expandable?: boolean;
  visibleItemsCount?: number;
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
  visibleItemsCount,
  expandable = false,
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
      selectedValues={selectedValues}
      onSelectedValuesChange={handleSelectedValuesChange}
      onValueChange={onValueChange}
      onSetIsPopoverOpen={setIsPopoverOpen}
      variant={variant}
      visibleItemsCount={visibleItemsCount}
      expandable={expandable}
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
