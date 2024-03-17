import { lkNavConfig } from "../../../../../shared/configs/lkNavConfig";
import { HeaderNavListItemLink } from "../../../../../shared/navigation/components/header/link/HeaderNavListItemLink";
import { useResponsiveContext } from "../../../../../shared/responsive";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../../shared/ui/nav-menu/NavigationMenu";

export const LkLayoutNav = () => {
  const isMobile = useResponsiveContext();

  return (
    <div className="flex justify-center">
      <NavigationMenu delayDuration={100} className="p-4">
        <NavigationMenuList>
          {lkNavConfig.map((i) => {
            return (
              <NavigationMenuItem>
                <HeaderNavListItemLink
                  className="flex-col text-base font-bold text-dark lg:flex-row lg:gap-4"
                  key={i.title}
                  to={i.href}
                  title={isMobile ? undefined : i.title}
                  icon={i.icon}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
