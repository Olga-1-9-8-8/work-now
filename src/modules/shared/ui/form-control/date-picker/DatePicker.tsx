import * as PopoverPrimitive from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { LanguageType } from "../../../configs";
import { cn } from "../../../utils/cn";
import { getLocale } from "../../../utils/getLocales";
import { Button } from "../../buttons/Button";
import { Calendar } from "../../calendar/Calendar";
import { FormControl } from "../../form/Form";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover/Popover";
import { datePickerConfig } from "./config/datePickerConfig";

interface DatePickerProps {
  language: LanguageType;
  onChange: (...event: any[]) => void;
  value: Date | undefined;
  className?: string;
}

export const DatePicker = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  DatePickerProps
>(({ value, onChange, className, language, ...props }, ref) => {
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
            {value ? (
              format(value, "PPP", { locale: getLocale(language) })
            ) : (
              <span>{datePickerConfig[language].select}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" ref={ref}>
        <Calendar
          mode="single"
          language={language}
          selected={value}
          onSelect={onChange}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
});
