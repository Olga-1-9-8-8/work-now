import * as React from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconAfter?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconAfter, ...props }, ref) => {
    const iconAfterRef = React.useRef<HTMLDivElement>(null);

    const [iconAfterWidth, setIconAfterWidth] = React.useState(0);

    React.useEffect(() => {
      if (iconAfter && iconAfterRef.current) {
        const newWidth = iconAfterRef.current.getBoundingClientRect().width;
        if (newWidth !== iconAfterWidth) {
          setIconAfterWidth(newWidth);
        }
      }
    }, [iconAfter, iconAfterWidth]);

    const inputPaddingRight = iconAfterWidth ? `calc(1rem + ${iconAfterWidth}px)` : "";

    return (
      <div className="relative flex w-full">
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className,
          )}
          style={{ paddingRight: inputPaddingRight }}
          ref={ref}
          {...props}
        />
        {iconAfter && (
          <div ref={iconAfterRef} className="absolute inset-y-0 right-0 flex items-center pr-5">
            {iconAfter}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
