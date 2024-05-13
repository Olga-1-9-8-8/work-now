import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";
import { cn } from "../../utils/cn";
import { useFormField } from "../form/Form";
import { Label } from "../labels/Label";
import { Checkbox } from "./Checkbox";

type InputLabeledProps = {
  label: string;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const CheckboxWithLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  InputLabeledProps
>(({ label, className, ...props }, ref) => {
  const { id } = useFormField();
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox id={id} {...props} ref={ref} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
});
