import { CheckIcon } from "lucide-react";
import { cn } from "../../../../../../utils";
import { CommandItem } from "../../../../../command/Command";

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
      <div
        className={cn(
          `${variant === "list" && "group-data-[selected='true']:border-dark"} mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary`,
          isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
        )}
      >
        <CheckIcon className="h-4 w-4" />
      </div>
      <span
        className={isAll && !isSelected ? "border-b border-dashed border-gray-400 opacity-75" : ""}
      >
        {title}
      </span>
    </CommandItem>
  );
};
