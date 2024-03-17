import { MainNavItems } from "../../configs/mainNavConfig";
import { UserRoles } from "../../types";

export const filterMainNavItems = (mainNavItems: MainNavItems, role: UserRoles) => {
  return mainNavItems.filter(
    (item) => item.permission === role || item.permission === UserRoles.All,
  );
};
