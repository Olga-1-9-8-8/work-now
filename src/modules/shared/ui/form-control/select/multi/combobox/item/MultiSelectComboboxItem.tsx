import { cn } from "../../../../../../utils";
import { CommandItem } from "../../../../../command/Command";
import { MultiSelectComboboxItemCheckbox } from "./MultiSelectComboboxItemCheckbox";

interface MultiSelectComboboxItemProps {
  onSelect: () => void;
  title: string;
  isSelected: boolean;
  variant: "popover" | "list";
  isAll?: boolean;
}

export const MultiSelectComboboxItem = ({
  onSelect,
  title,
  isSelected,
  variant,
  isAll = false,
}: MultiSelectComboboxItemProps) => {
  return (
    <CommandItem
      onSelect={onSelect}
      className={cn({
        "data-[selected='true']:bg-transparent": variant === "list",
        group: true,
      })}
    >
      <MultiSelectComboboxItemCheckbox isSelected={isSelected} variant={variant} />
      <span
        className={isAll && !isSelected ? "border-b border-dashed border-gray-400 opacity-75" : ""}
      >
        {title}
      </span>
    </CommandItem>
  );
};
