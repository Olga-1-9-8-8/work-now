/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./TooltipPrimitive";

interface TooltipProps extends React.ComponentPropsWithoutRef<typeof TooltipBase> {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const Tooltip = ({
  className,
  content,
  children,
  delayDuration,
  ...props
}: TooltipProps) => {
  if (!content) return <>{children}</>;
  return (
    <TooltipProvider>
      <TooltipBase delayDuration={delayDuration} {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="top" align="center" className={className} {...props}>
          {content}
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
};
