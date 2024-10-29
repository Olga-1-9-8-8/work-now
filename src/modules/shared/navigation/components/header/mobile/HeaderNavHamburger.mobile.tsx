import { Menu } from "lucide-react";
import { LanguageType } from "../../../../configs";
import { MainNavItem } from "../../../../configs/mainNavConfig";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../ui/nav-menu/NavigationMenu";
import {
  LanguageSwitcherDropdown,
  useLanguageSwitcher,
} from "../../../../widgets/languages-switcher";
import { HeaderNavListItemLink } from "../link/HeaderNavListItemLink";

interface HeaderNavHamburgerMobileProps {
  items: MainNavItem[];
}

export const HeaderNavHamburgerMobile = ({ items }: HeaderNavHamburgerMobileProps) => {
  const { language } = useLanguageSwitcher("shared");
  return (
    <div className="flex items-center gap-4">
      <LanguageSwitcherDropdown />
      <NavigationMenu delayDuration={100} className="justify-end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mr-5">
              <Menu className="h-8 w-8 text-white sm:h-9 sm:w-9" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] p-4">
                {items.map((i: MainNavItem, index: number) => {
                  return (
                    <HeaderNavListItemLink
                      className="flex-row gap-4 text-base font-bold text-dark"
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      to={i.href}
                      title={i.title[language as LanguageType]}
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
