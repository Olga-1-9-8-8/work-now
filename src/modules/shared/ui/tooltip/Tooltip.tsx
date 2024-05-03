import * as TooltipBase from "@radix-ui/react-tooltip";
import React, { ReactNode } from "react";
import { TooltipContent, TooltipPrimitive, TooltipTrigger } from "./TooltipPrimitive";

interface TooltipProps {
  content: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipBase.Content>,
  TooltipProps & React.ComponentPropsWithoutRef<typeof TooltipBase.Content>
>(({ className, content, open, defaultOpen, onOpenChange, children, ...props }, ref) => {
  return (
    <TooltipPrimitive open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent ref={ref} side="top" align="center" className={className} {...props}>
        {content}
      </TooltipContent>
    </TooltipPrimitive>
  );
});
