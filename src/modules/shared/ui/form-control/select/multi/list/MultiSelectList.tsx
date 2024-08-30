import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { UniversalItemType } from "../../../../../types";
import { cn } from "../../../../../utils";
import { Button } from "../../../../buttons/Button";
import { Command, CommandGroup, CommandItem, CommandList } from "../../../../command/Command";

interface MultiSelectListProps {
  options: Required<UniversalItemType<string>>[];
  onValueChange: (value: string[]) => void;
  defaultValue: string[];
  visibleItemsCount?: number;
  onSetIsExpand: () => void;
}

export const MultiSelectList = ({
  options,
  onValueChange,
  defaultValue = [],
  visibleItemsCount = 7,
  onSetIsExpand,
}: MultiSelectListProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(() => defaultValue);
  const showExpandButton = options.length > visibleItemsCount;
  const visibleItems = options.slice(0, visibleItemsCount);

  useEffect(() => {
    setSelectedValues(defaultValue);
  }, [defaultValue]);

  const toggleOption = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  return (
    <Command>
      <CommandList>
        <CommandGroup>
          {visibleItems.map((option, index) => {
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
        {showExpandButton && (
          <Button variant="link" className=" text-primary-extraDark" onClick={onSetIsExpand}>
            Показать все
          </Button>
        )}
      </CommandList>
    </Command>
  );
};
