import { CheckIcon, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { UniversalItemType } from "../../../types";
import { cn } from "../../../utils";
import { Button } from "../../buttons/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../command/Command";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover/Popover";

interface MultiSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: Required<UniversalItemType<string>>[];
  onValueChange: (value: string[]) => void;
  defaultValue: string[];
  placeholder: string;
  withSearch?: boolean;
  className?: string;
}

export const MultiSelect = ({
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
  const selectRef = useRef<HTMLButtonElement | null>(null);
  const [selectWidth, setSelectWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (selectRef.current) {
        setSelectWidth(selectRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSelectedValues(defaultValue);
  }, [defaultValue]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsPopoverOpen(true);
    } else if (event.key === "Backspace" && !event.currentTarget.value) {
      const updatedSelectedValues = selectedValues.slice(0, -1);
      setSelectedValues(updatedSelectedValues);
      onValueChange(updatedSelectedValues);
    }
  };

  const toggleOption = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const handleClear = () => {
    setSelectedValues([]);
    onValueChange([]);
  };

  const toggleAll = () => {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      const allValues = options.map((option) => option.value);
      setSelectedValues(allValues);
      onValueChange(allValues);
    }
  };

  const handleTogglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={selectRef}
          {...props}
          onClick={handleTogglePopover}
          className={cn(
            "relative flex h-auto min-h-10 w-full items-center justify-between rounded-md border bg-inherit p-1 hover:bg-inherit",
            className,
          )}
        >
          <div className=" mx-auto flex w-full items-center justify-between">
            <span className="mx-3 text-sm text-muted-foreground">{placeholder}</span>
            <ChevronDown
              className={`mx-2 h-4 cursor-pointer text-muted-foreground transition-transform duration-200 ${isPopoverOpen ? "rotate-180" : ""}`}
            />
            {selectedValues.length > 0 && (
              <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive font-bold">
                <span className="text-[0.7rem] text-white">{selectedValues.length}</span>
              </div>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: `${selectWidth}px` }}
        className="p-0"
        align="start"
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command>
          {withSearch && <CommandInput placeholder="Поиск..." onKeyDown={handleInputKeyDown} />}
          <CommandList>
            <CommandEmpty>Результаты не найдены.</CommandEmpty>
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
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                onSelect={() => setIsPopoverOpen(false)}
                className="max-w-full flex-1 cursor-pointer justify-center bg-primary text-primary-foreground transition-colors delay-75 data-[selected='true']:bg-primary-extraDark data-[selected='true']:text-white"
              >
                Готово
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

MultiSelect.displayName = "MultiSelect";
