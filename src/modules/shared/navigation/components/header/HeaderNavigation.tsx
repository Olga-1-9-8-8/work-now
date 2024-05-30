import { mainNavConfig } from "../../../configs";
import { useResponsiveContext } from "../../../responsive";
import { useAuthContext } from "../../../services/auth";
import { UserRoles } from "../../../types";
import { LanguagesSwitcherButton } from "../../../widgets/languages-switcher";
import { filterMainNavItems } from "../../utils/filterMainNavItems";
import { Logo } from "../Logo";
import { HeaderNavListDesktop } from "./desktop/HeaderNavList.desktop";
import { HeaderNavHamburgerMobile } from "./mobile/HeaderNavHamburger.mobile";

export const HeaderNavigation = () => {
  const isMobile = useResponsiveContext();

  const { isAuthenticated, isUserLoading } = useAuthContext();

  const role = isAuthenticated ? UserRoles.Authorized : UserRoles.NotAuthorized;

  const visibleItems = filterMainNavItems(mainNavConfig, role);

  return (
    <div className="flex items-center justify-between">
      <Logo />

      {isMobile ? (
        <div className="flex items-center gap-8">
          <LanguagesSwitcherButton />
          <HeaderNavHamburgerMobile items={visibleItems} />
        </div>
      ) : (
        !isUserLoading && <HeaderNavListDesktop items={visibleItems} />
      )}
    </div>
  );
};
