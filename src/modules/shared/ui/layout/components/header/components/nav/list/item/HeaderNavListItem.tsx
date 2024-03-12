import React, { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";
import { cn } from "../../../../../../../../utils/cn";
import { NavigationMenuLink } from "../../../../../../../nav-menu/NavigationMenu";

interface HeaderNavListItemProps {
  icon?: ReactNode;
  to: To;
}

export const HeaderNavListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & HeaderNavListItemProps
>(({ className, title, to, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          ref={ref}
          className={cn(
            "flex select-none items-center gap-5 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          to={to}
          {...props}
        >
          {icon && icon}
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </div>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
});

HeaderNavListItem.displayName = "ListItem";
