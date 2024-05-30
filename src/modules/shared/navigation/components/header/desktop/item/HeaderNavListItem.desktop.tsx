import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MainNavItem } from "../../../../../configs/mainNavConfig";
import { Button } from "../../../../../ui/buttons/Button";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "../../../../../ui/nav-menu/NavigationMenu";
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
  const { t } = useTranslation("header");
  const navigate = useNavigate();
  const Icon = item.icon;
  if (!item.items) {
    return item.type === "button" ? (
      <Button
        onClick={() => navigate(`${item.href}`)}
        className="flex h-full flex-col gap-2 font-bold text-white/80 hover:text-white/100"
        variant="link"
      >
        <Icon size={20} />
        {t(item.title)}
      </Button>
    ) : (
      <HeaderNavListItemLink
        icon={item.icon}
        to={item.href}
        title={t(item.title)}
        className={className}
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
          title={t(item.title)}
          className={className}
          {...props}
          ref={ref}
        />
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="w-[300px] p-4">
          {item.items.map((i: MainNavItem) => {
            return (
              <HeaderNavListItemLink
                className="flex-row gap-4 font-bold text-dark"
                key={i.title}
                to={i.href}
                title={t(i.title)}
                icon={i.icon}
              />
            );
          })}
        </ul>
      </NavigationMenuContent>
    </>
  );
});
