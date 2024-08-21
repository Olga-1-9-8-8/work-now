import { MainNavItems } from "../../configs/mainNavConfig";
import { UserRoles } from "../../types";

export const filterMainNavItems = (mainNavItems: MainNavItems, role: UserRoles) =>
  mainNavItems.filter(({ permission }) => permission === role || permission === UserRoles.All);
