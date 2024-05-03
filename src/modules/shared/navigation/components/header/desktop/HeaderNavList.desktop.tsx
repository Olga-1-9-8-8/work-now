import { MainNavItem } from "../../../../configs/mainNavConfig";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../ui/nav-menu/NavigationMenu";
import { LanguagesSwitcherButton } from "../../../../widgets/languages-switcher/components/LanguagesSwitcherButton";
import { HeaderNavListItemDesktop } from "./item/HeaderNavListItem.desktop";

interface HeaderNavListDesktopProps {
  items: MainNavItem[];
}

export const HeaderNavListDesktop = ({ items }: HeaderNavListDesktopProps) => {
  return (
    <NavigationMenu delayDuration={100} className="justify-end">
      <NavigationMenuList className="pl-2 lg:gap-8">
        {items.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <HeaderNavListItemDesktop item={item} />
            </NavigationMenuItem>
          );
        })}
        <LanguagesSwitcherButton className="lg:ml-12" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
