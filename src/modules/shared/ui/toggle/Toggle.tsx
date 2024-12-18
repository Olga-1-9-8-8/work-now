import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/cn";

export const toggleVariants = cva("w-full rounded-md", {
  variants: {
    variant: {
      default: "",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      primary:
        "border border-input bg-primary hover:bg-success hover:text-white/70 py-2 px-4 text-white [&[data-state=on]]:bg-success ",
    },
    size: {
      default: "",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1 ", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={React.useMemo(() => ({ variant, size }), [variant, size])}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          // eslint-disable-next-line unicorn/explicit-length-check
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
