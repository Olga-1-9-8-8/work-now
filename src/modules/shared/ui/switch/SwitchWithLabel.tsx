import * as SwitchPrimitives from "@radix-ui/react-switch";
import React, { useId } from "react";
import { cn } from "../../utils/cn";
import { Label } from "../labels/Label";
import { Switch } from "./Switch";

type InputLabeledProps = {
  label: string;
} & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const SwitchWithLabel = React.forwardRef<HTMLDivElement, InputLabeledProps>(
  ({ label, className, ...props }, ref) => {
    const id = useId();
    return (
      <div className={cn("flex items-center space-x-2", className)} ref={ref}>
        <Switch id={id} {...props} />
        <Label htmlFor={id} className="text-nowrap">
          {label}
        </Label>
      </div>
    );
  },
);
