import { Menu } from "lucide-react";
import { MainNavItem } from "../../../../configs/mainNavConfig";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../ui/nav-menu/NavigationMenu";
import { LanguagesSwitcherButton } from "../../../../widgets/languages-switcher";
import { HeaderNavListItemLink } from "../link/HeaderNavListItemLink";

interface HeaderNavHamburgerMobileProps {
  items: MainNavItem[];
}

export const HeaderNavHamburgerMobile = ({ items }: HeaderNavHamburgerMobileProps) => {
  return (
    <div className="flex items-center gap-8">
      <LanguagesSwitcherButton />
      <NavigationMenu delayDuration={100} className="justify-end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mr-10 sm:mr-5">
              <Menu size={38} className="text-white" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] p-4">
                {items.map((i: MainNavItem) => {
                  return (
                    <HeaderNavListItemLink
                      className="flex-row gap-4 text-base font-bold text-dark"
                      key={i.title}
                      to={i.href}
                      title={i.title}
                      icon={i.icon}
                    />
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
