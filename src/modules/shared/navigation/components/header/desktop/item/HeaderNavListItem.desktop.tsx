import React from "react";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "../../../../../configs/internationalization/InternationalizationConfig";
import { MainNavItem } from "../../../../../configs/mainNavConfig";
import { Button } from "../../../../../ui/buttons/Button";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "../../../../../ui/nav-menu/NavigationMenu";
import { cn } from "../../../../../utils";
import { useLanguageSwitcher } from "../../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { HeaderNavListItemLink } from "../../link/HeaderNavListItemLink";

interface HeaderNavListItemDesktopProps {
  item: MainNavItem & {
    items?: MainNavItem[];
  };
}

export const HeaderNavListItemDesktop = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & HeaderNavListItemDesktopProps
>(({ className, title, item, children, ...props }, ref) => {
  const { language } = useLanguageSwitcher("header");
  const navigate = useNavigate();

  const Icon = item.icon;
  if (!item.items) {
    return item.type === "button" ? (
      <Button
        onClick={() => navigate(`${item.href}`)}
        className="flex h-full flex-col gap-2 text-xs font-bold text-white/80 hover:text-white/100 lg:text-sm"
        variant="link"
      >
        <Icon size={20} />
        {item.title[language as LanguageType]}
      </Button>
    ) : (
      <HeaderNavListItemLink
        icon={item.icon}
        to={item.href}
        title={item.title[language as LanguageType]}
        className={cn("text-xs lg:text-sm", className)}
        {...props}
        ref={ref}
      />
    );
  }

  return (
    <>
      <NavigationMenuTrigger>
        <HeaderNavListItemLink
          icon={item.icon}
          to={item.href}
          title={item.title[language as LanguageType]}
          className={cn("text-xs lg:text-sm", className)}
          {...props}
          ref={ref}
        />
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="w-[300px] p-4">
          {item.items.map((i: MainNavItem, index: number) => {
            return (
              <HeaderNavListItemLink
                className="flex-row gap-4 font-bold text-dark"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                to={i.href}
                title={i.title[language as LanguageType]}
                icon={i.icon}
                isExit={i.isExit}
              />
            );
          })}
        </ul>
      </NavigationMenuContent>
    </>
  );
});
