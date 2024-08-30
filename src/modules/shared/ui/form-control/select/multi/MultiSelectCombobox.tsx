import { CheckIcon } from "lucide-react";
import { UniversalItemType } from "../../../../types";
import { cn } from "../../../../utils";
import { Button } from "../../../buttons/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../command/Command";
import { ScrollArea } from "../../../scroll-area/ScrollArea";

interface MultiSelectComboboxProps {
  options: Required<UniversalItemType<string>>[];
  selectedValues: string[];
  onValueChange: (value: string[]) => void;
  onSelectedValuesChange: (value: string[]) => void;
  withSearch?: boolean;
  onSetIsPopoverOpen?: (value: boolean) => void;
  variant?: "popover" | "list";
}

export const MultiSelectCombobox = ({
  options,
  onValueChange,
  onSelectedValuesChange,
  selectedValues,
  onSetIsPopoverOpen,
  withSearch = false,
  variant,
}: MultiSelectComboboxProps) => {
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSetIsPopoverOpen?.(true);
    } else if (event.key === "Backspace" && !event.currentTarget.value) {
      const updatedSelectedValues = selectedValues.slice(0, -1);
      onSelectedValuesChange(updatedSelectedValues);
      onValueChange(updatedSelectedValues);
    }
  };

  const toggleOption = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onSelectedValuesChange(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const handleClear = () => {
    onSelectedValuesChange([]);
    onValueChange([]);
  };

  const toggleAll = () => {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      const allValues = options.map((option) => option.value);
      onSelectedValuesChange(allValues);
      onValueChange(allValues);
    }
  };

  return (
    <Command>
      {withSearch && (
        <CommandInput
          inputClassName={`${variant === "list" ? "bg-secondary rounded-2xl" : ""}`}
          placeholder="Поиск..."
          onKeyDown={handleInputKeyDown}
        />
      )}
      <CommandList>
        <CommandEmpty>Результаты не найдены.</CommandEmpty>
        <ScrollArea type="always" className="h-60">
          <CommandGroup>
            <CommandItem key="all" onSelect={toggleAll} className="cursor-pointer">
              <div
                className={cn(
                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                  selectedValues.length === options.length
                    ? "bg-primary text-primary-foreground"
                    : "opacity-50 [&_svg]:invisible",
                )}
              >
                <CheckIcon className="h-4 w-4" />
              </div>
              <span
                className={` ${selectedValues.length !== options.length && "border-b border-dashed border-gray-400 opacity-75"}`}
              >
                (Выбрать все)
              </span>
            </CommandItem>
            {options.map((option, index) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <CommandItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onSelect={() => toggleOption(option.value)}
                  className="cursor-pointer"
                >
                  <div
                    className={cn(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "opacity-50 [&_svg]:invisible",
                    )}
                  >
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span>{option.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </ScrollArea>
      </CommandList>
      {variant === "popover" && (
        <div className="flex gap-2 p-2">
          <Button size="sm" onClick={() => onSetIsPopoverOpen?.(false)} className="flex-1">
            Готово
          </Button>
          <Button size="sm" onClick={() => handleClear()} className="flex-1">
            Сбросить
          </Button>
        </div>
      )}
    </Command>
  );
};
