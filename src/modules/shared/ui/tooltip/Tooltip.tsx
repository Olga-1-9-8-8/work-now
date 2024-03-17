import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { TooltipContent, TooltipPrimitive, TooltipTrigger } from "./TooltipPrimitive";

interface TooltipProps {
  content: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Tooltip = ({
  content,
  open,
  defaultOpen,
  onOpenChange,
  children,
  ...props
}: TooltipProps & TooltipContentProps & React.RefAttributes<HTMLDivElement>) => {
  return (
    <TooltipPrimitive open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="top" align="center" {...props}>
        {content}
      </TooltipContent>
    </TooltipPrimitive>
  );
};
