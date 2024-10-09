import { LanguageType } from "../../../../../shared/configs";
import { lkNavConfig } from "../../../../../shared/configs/lkNavConfig";
import { HeaderNavListItemLink } from "../../../../../shared/navigation";
import { useResponsiveContext } from "../../../../../shared/responsive";
import { useAuthContext } from "../../../../../shared/services/auth";
import { UserEntity } from "../../../../../shared/types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../../shared/ui/nav-menu/NavigationMenu";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useLkCountsContext } from "../../../context/LkCountsProvider";
import { getTotalCount } from "../../../utils/getTotalCount";

export const LkLayoutNav = () => {
  const isMobile = useResponsiveContext();
  const { role } = useAuthContext();
  const totalCounts = useLkCountsContext();

  const { language } = useLanguageSwitcher("lk");

  return (
    <div className="flex justify-center">
      <NavigationMenu delayDuration={100} className="p-4">
        <NavigationMenuList>
          {lkNavConfig.map((i, index) => {
            if (i.role !== role && i.role !== UserEntity.All) return null;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <NavigationMenuItem key={index}>
                <HeaderNavListItemLink
                  className="flex-col text-base font-bold text-dark lg:flex-row lg:gap-4"
                  to={i.href}
                  title={isMobile ? undefined : i.title[language as LanguageType]}
                  icon={i.icon}
                  totalCount={getTotalCount(i.value, totalCounts)}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
