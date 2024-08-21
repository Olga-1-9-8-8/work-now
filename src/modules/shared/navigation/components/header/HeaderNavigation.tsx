import { useResponsiveContext } from "../../../responsive";
import { useRoleBasedHeaderNavigation } from "../../hooks/useRoleBasedHeaderNavigation";
import { HeaderNavListDesktop } from "./desktop/HeaderNavList.desktop";
import { HeaderNavHamburgerMobile } from "./mobile/HeaderNavHamburger.mobile";

export const HeaderNavigation = () => {
  const isMobile = useResponsiveContext();
  const visibleItems = useRoleBasedHeaderNavigation();
  return isMobile ? (
    <HeaderNavHamburgerMobile items={visibleItems} />
  ) : (
    <HeaderNavListDesktop items={visibleItems} />
  );
};
