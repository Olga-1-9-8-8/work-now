import { useMemo } from "react";
import { mainNavConfig } from "../../configs";
import { useAuthContext } from "../../services/auth";
import { UserRoles } from "../../types";
import { filterMainNavItems } from "../utils/filterMainNavItems";

export const useRoleBasedHeaderNavigation = () => {
  const { isAuthenticated } = useAuthContext();
  const userRole = isAuthenticated ? UserRoles.Authorized : UserRoles.NotAuthorized;

  return useMemo(() => filterMainNavItems(mainNavConfig, userRole), [userRole]);
};
