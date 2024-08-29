import { MainNavItem } from "../../../../configs/mainNavConfig";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../ui/nav-menu/NavigationMenu";
import { LanguagesSwitcherButton } from "../../../../widgets/languages-switcher";
import { HeaderNavListItemDesktop } from "./item/HeaderNavListItem.desktop";

interface HeaderNavListDesktopProps {
  items: MainNavItem[];
}

export const HeaderNavListDesktop = ({ items }: HeaderNavListDesktopProps) => {
  return (
    <NavigationMenu delayDuration={100} className="justify-end">
      <NavigationMenuList className="pl-2 lg:gap-2">
        {items.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <HeaderNavListItemDesktop item={item} className="p-1 lg:p-3" />
            </NavigationMenuItem>
          );
        })}
        <LanguagesSwitcherButton className="lg:ml-12" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
