import React, { ElementType } from "react";
import { NavLink, To } from "react-router-dom";
import { NavigationMenuLink } from "../../../../ui/nav-menu/NavigationMenu";
import { cn } from "../../../../utils/cn";

interface HeaderNavListItemProps {
  to: To;
  icon: ElementType;
}

export const HeaderNavListItemLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & HeaderNavListItemProps
>(({ className, title, to, icon, children, ...props }, ref) => {
  const Icon = icon;
  return (
    <NavigationMenuLink asChild>
      <NavLink
        ref={ref}
        className={cn(
          "flex select-none flex-col items-center gap-1 space-y-1 rounded-md p-3 text-sm font-medium leading-none text-white no-underline opacity-70 outline-none transition-colors hover:opacity-100",
          className,
        )}
        to={to}
        {...props}
      >
        <Icon />
        <div className="text-nowrap leading-none">{title}</div>
      </NavLink>
    </NavigationMenuLink>
  );
});
