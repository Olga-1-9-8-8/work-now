import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React, { useId } from "react";
import { cn } from "../../utils/cn";
import { Label } from "../labels/Label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

type RadioGroupLabeledProps = {
  label: string;
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

export const RadioGroupWithLabel = React.forwardRef<HTMLDivElement, RadioGroupLabeledProps>(
  ({ label, className, ...props }, ref) => {
    const id = useId();
    return (
      <div className={cn("flex items-center space-x-2", className)} ref={ref}>
        <Label htmlFor={id} className="text-nowrap">
          {label}
        </Label>
        <RadioGroup id={id} {...props} />
      </div>
    );
  },
);

type RadioGroupItemWithLabelProps = {
  label: string;
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

export const RadioGroupItemWithLabel = ({
  label,
  className,
  ...props
}: RadioGroupItemWithLabelProps) => {
  const id = useId();
  return (
    <div className="flex items-center space-x-3 space-y-0">
      <RadioGroupItem id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};
