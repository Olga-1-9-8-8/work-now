import { CommandItem } from "cmdk";
import { useCallback, useState } from "react";
import { UniversalItemType } from "../../../../../types";
import { Button } from "../../../../buttons/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../../../../command/Command";
import { ScrollArea } from "../../../../scroll-area/ScrollArea";
import { MultiSelectComboboxItem } from "./item/MultiSelectComboboxItem";

interface MultiSelectComboboxProps {
  options: Required<UniversalItemType<string>>[];
  selectedValues: string[];
  onValueChange: (value: string[]) => void;
  onSelectedValuesChange: (value: string[]) => void;
  onSetIsPopoverOpen?: (value: boolean) => void;
  expandable?: boolean;
  visibleItemsCount?: number;
  variant: "popover" | "list";
}

export const MultiSelectCombobox = ({
  options,
  onValueChange,
  onSelectedValuesChange,
  selectedValues,
  onSetIsPopoverOpen,
  expandable,
  visibleItemsCount = 7,
  variant,
}: MultiSelectComboboxProps) => {
  const [isExpand, setIsExpand] = useState(false);

  const visibleItems = expandable && !isExpand ? options.slice(0, visibleItemsCount) : options;
  const showExpandButton = expandable && options.length > visibleItemsCount && !isExpand;

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSetIsPopoverOpen?.(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const updatedSelectedValues = selectedValues.slice(0, -1);
        onSelectedValuesChange(updatedSelectedValues);
        onValueChange(updatedSelectedValues);
      }
    },
    [onSelectedValuesChange, onSetIsPopoverOpen, onValueChange, selectedValues],
  );

  const toggleOption = useCallback(
    (value: string) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      onSelectedValuesChange(newSelectedValues);
      onValueChange(newSelectedValues);
    },
    [onSelectedValuesChange, onValueChange, selectedValues],
  );

  const handleClear = useCallback(() => {
    onSelectedValuesChange([]);
    onValueChange([]);
  }, [onSelectedValuesChange, onValueChange]);

  const toggleAll = useCallback(() => {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      const allValues = options.map((option) => option.value);
      onSelectedValuesChange(allValues);
      onValueChange(allValues);
    }
  }, [handleClear, onSelectedValuesChange, onValueChange, options, selectedValues.length]);

  return (
    <Command>
      {isExpand && (
        <CommandInput
          inputClassName={`${variant === "list" ? "bg-secondary rounded-2xl" : ""}`}
          placeholder="Поиск..."
          onKeyDown={handleInputKeyDown}
        />
      )}
      <CommandList>
        <CommandEmpty>Результаты не найдены.</CommandEmpty>
        <ScrollArea
          type="always"
          className={`${variant === "list" ? "h-72" : "flex max-h-[300px] flex-col"}`}
        >
          <CommandGroup>
            <CommandItem value="-" className="hidden" />
            {variant === "popover" && (
              <MultiSelectComboboxItem
                key="all"
                onSelect={toggleAll}
                title="(Выбрать все)"
                isSelected={selectedValues.length === options.length}
                variant={variant}
                isAll
              />
            )}
            {visibleItems.map((option) => (
              <MultiSelectComboboxItem
                key={option.value}
                onSelect={() => toggleOption(option.value)}
                title={option.title}
                isSelected={selectedValues.includes(option.value)}
                variant={variant}
              />
            ))}
          </CommandGroup>
          {showExpandButton && (
            <Button
              variant="link"
              className="text-primary-extraDark"
              onClick={() => setIsExpand(true)}
            >
              Показать все
            </Button>
          )}
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
