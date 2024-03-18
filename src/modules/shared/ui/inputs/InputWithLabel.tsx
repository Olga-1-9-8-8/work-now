import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import { useFormField } from "../form/Form";
import { Label } from "../labels/Label";
import { Input } from "./Input";

type InputLabeledProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const InputWithLabel = React.forwardRef<HTMLDivElement, InputLabeledProps>(
  ({ label, className, ...props }, ref) => {
    const { id } = useFormField();
    return (
      <div className={cn("grid w-full max-w-xl items-center gap-1.5", className)} ref={ref}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...props} />
      </div>
    );
  },
);
