import * as React from "react";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import { useFormField } from "../form/Form";
import { Label } from "../labels/Label";
import { Textarea } from "./Textarea";

type TextareaLabeledProps = {
  label: string;
} & ComponentPropsWithoutRef<"textarea">;

export const TextareaWithLabel = React.forwardRef<HTMLTextAreaElement, TextareaLabeledProps>(
  ({ label, className, ...props }, ref) => {
    const { id } = useFormField();
    return (
      <div className={cn("grid w-full gap-1.5", className)}>
        <Label htmlFor={id}>{label}</Label>
        <Textarea {...props} id={id} ref={ref} />
      </div>
    );
  },
);
