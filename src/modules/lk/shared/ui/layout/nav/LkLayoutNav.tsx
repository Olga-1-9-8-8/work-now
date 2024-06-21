/* eslint-disable unicorn/no-useless-undefined */
import { lkNavConfig } from "../../../../../shared/configs/lkNavConfig";
import { HeaderNavListItemLink } from "../../../../../shared/navigation/components/header/link/HeaderNavListItemLink";
import { useResponsiveContext } from "../../../../../shared/responsive";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../../shared/ui/nav-menu/NavigationMenu";
import { useProfileTotalCounts } from "../../../hooks/useProfileTotalCounts";

export const LkLayoutNav = () => {
  const isMobile = useResponsiveContext();

  const { getTotalCount } = useProfileTotalCounts();

  return (
    <div className="flex justify-center">
      <NavigationMenu delayDuration={100} className="p-4">
        <NavigationMenuList>
          {lkNavConfig.map((i) => {
            return (
              <NavigationMenuItem key={i.title}>
                <HeaderNavListItemLink
                  className="flex-col text-base font-bold text-dark lg:flex-row lg:gap-4"
                  to={i.href}
                  title={isMobile ? undefined : i.title}
                  icon={i.icon}
                  totalCount={getTotalCount(i.value)}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
