import { CheckIcon } from "lucide-react";
import { cn } from "../../../../../../utils";

interface MultiSelectComboboxItemCheckboxProps {
  isSelected: boolean;
  variant: "popover" | "list";
}

export const MultiSelectComboboxItemCheckbox = ({
  isSelected,
  variant,
}: MultiSelectComboboxItemCheckboxProps) => {
  return (
    <div
      className={cn(
        `${variant === "list" && "group-data-[selected='true']:border-dark"} mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary`,
        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
      )}
    >
      <CheckIcon className="h-4 w-4" />
    </div>
  );
};
