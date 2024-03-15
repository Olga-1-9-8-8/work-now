import { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";
import { NavigationMenuItem } from "../../../../../../shared/ui/nav-menu/NavigationMenu";

interface LkLayoutNavItemProps {
  title: string;
  to: To;
  icon: ReactNode;
}

export const LkLayoutNavItem = ({ title, to, icon }: LkLayoutNavItemProps) => {
  return (
    <NavigationMenuItem>
      <NavLink
        className="flex items-center gap-2 hover:text-primary active:text-primary-extraDark "
        to={to}
      >
        {icon}
        <span>{title}</span>
      </NavLink>
    </NavigationMenuItem>
  );
};
