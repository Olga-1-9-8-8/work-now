import { useMemo } from "react";
import { mainNavConfig } from "../../configs";
import { useAuthContext } from "../../services/auth";
import { UserRoles } from "../../types";
import { filterMainNavItems } from "../utils/filterMainNavItems";

export const useRoleBasedHeaderNavigation = () => {
  const { isAuthenticated } = useAuthContext();

  return useMemo(
    () =>
      filterMainNavItems(
        mainNavConfig,
        isAuthenticated ? UserRoles.Authorized : UserRoles.NotAuthorized,
      ),
    [isAuthenticated],
  );
};
