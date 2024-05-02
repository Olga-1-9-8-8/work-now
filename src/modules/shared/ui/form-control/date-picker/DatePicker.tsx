import * as PopoverPrimitive from "@radix-ui/react-popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "../../../utils/cn";
import { Button } from "../../buttons/Button";
import { Calendar } from "../../calendar/Calendar";
import { FormControl } from "../../form/Form";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover/Popover";

interface DatePickerProps {
  value?: any;
  onChange: any;
}

export const DatePicker = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof DayPicker> & DatePickerProps
>(({ value, onChange, className, ...props }, ref) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !value && "text-muted-foreground",
              className,
            )}
          >
            {value ? format(value, "PPP", { locale: ru }) : <span>Выберите дату</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" ref={ref}>
        <Calendar mode="single" selected={value} onSelect={onChange} initialFocus {...props} />
      </PopoverContent>
    </Popover>
  );
});
