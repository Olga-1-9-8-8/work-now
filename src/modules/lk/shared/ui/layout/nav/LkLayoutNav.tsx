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
import { getContext } from "../../../utils/getContext";

export const LkLayoutNav = () => {
  const isMobile = useResponsiveContext();
  const { role } = useAuthContext();

  const { language } = useLanguageSwitcher("lk");

  return (
    <div className="flex justify-center">
      <NavigationMenu delayDuration={100} className="p-4">
        <NavigationMenuList>
          {lkNavConfig.map((i, index) => {
            if (i.role !== role && i.role !== UserEntity.All) return null;
            const context = getContext(i.value);

            return (
              // eslint-disable-next-line react/no-array-index-key
              <NavigationMenuItem key={index}>
                <HeaderNavListItemLink
                  className="xs:p-3 flex-col p-2 text-base font-bold text-dark lg:flex-row lg:gap-4"
                  to={i.href}
                  title={isMobile ? undefined : i.title[language as LanguageType]}
                  icon={i.icon}
                  totalCount={context?.totalCount}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
