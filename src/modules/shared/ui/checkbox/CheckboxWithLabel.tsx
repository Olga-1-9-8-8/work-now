import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React, { useId } from "react";
import { cn } from "../../utils/cn";
import { Label } from "../labels/Label";
import { Checkbox } from "./Checkbox";

type InputLabeledProps = {
  label: string;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const CheckboxWithLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  InputLabeledProps
>(({ label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <Checkbox id={id} {...props} ref={ref} />
      <Label className="text-sm text-dark" htmlFor={id}>
        {label}
      </Label>
    </div>
  );
});
