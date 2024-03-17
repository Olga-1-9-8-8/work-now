import { MainNavItem } from "../../../../configs/mainNavConfig";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../ui/nav-menu/NavigationMenu";
import { HeaderNavListItemDesktop } from "./item/HeaderNavListItem.desktop";

interface HeaderNavListDesktopProps {
  items: MainNavItem[];
}

export const HeaderNavListDesktop = ({ items }: HeaderNavListDesktopProps) => {
  return (
    <NavigationMenu delayDuration={100} className="justify-end">
      <NavigationMenuList className="gap-2 pl-2 lg:gap-8">
        {items.map((item) => {
          return (
            <NavigationMenuItem>
              <HeaderNavListItemDesktop key={item.title} item={item} />
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
