import { mainNavConfig } from "../../../configs";
import { useResponsiveContext } from "../../../responsive";
import { UserRoles } from "../../../types";
import { filterMainNavItems } from "../../utils/filterMainNavItems";
import { Logo } from "../Logo";
import { HeaderNavListDesktop } from "./desktop/HeaderNavList.desktop";
import { HeaderNavHamburgerMobile } from "./mobile/HeaderNavHamburger.mobile";

export const HeaderNavigation = () => {
  const isMobile = useResponsiveContext();

  // TODO: получить значение
  const role = UserRoles.Authorized;

  const visibleItems = filterMainNavItems(mainNavConfig, role);

  return (
    <div className="flex items-center justify-between">
      <Logo />
      {isMobile ? (
        <HeaderNavHamburgerMobile items={visibleItems} />
      ) : (
        <HeaderNavListDesktop items={visibleItems} />
      )}
    </div>
  );
};
