import * as React from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconAfter?: React.ElementType;
  onIconClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconAfter, onIconClick, ...props }, ref) => {
    const Icon = iconAfter;
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-5">
            <Icon className="h-6 w-6 cursor-pointer text-muted-foreground" onClick={onIconClick} />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
