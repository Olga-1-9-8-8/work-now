import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { cn } from "../../../../utils";
import { Button } from "../../../buttons/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../../../popover/Popover";

interface MultiSelectPopoverProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
  children: React.ReactNode;
  count: number;
  isPopoverOpen: boolean;
  onSetIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const MultiSelectPopover = ({
  placeholder,
  children,
  count,
  isPopoverOpen,
  onSetIsPopoverOpen,
  className,
  ...props
}: MultiSelectPopoverProps) => {
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

  const handleTogglePopover = () => {
    onSetIsPopoverOpen((prev) => !prev);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={onSetIsPopoverOpen}>
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
            <span className="mx-3 text-sm text-muted-foreground">
              {placeholder ?? "Выберите из списка"}
            </span>
            <ChevronDown
              className={`mx-2 h-4 cursor-pointer text-muted-foreground transition-transform duration-200 ${isPopoverOpen ? "rotate-180" : ""}`}
            />
            {count > 0 && (
              <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive font-bold">
                <span className="text-[0.7rem] text-white">{count}</span>
              </div>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: `${selectWidth}px` }}
        className="p-0"
        align="start"
        onEscapeKeyDown={() => onSetIsPopoverOpen(false)}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
