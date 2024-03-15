import { FileText, Heart, Home, Mails, UserCircle2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "../../../../../shared/ui/nav-menu/NavigationMenu";
import { LkLayoutNavItem } from "./item/LkLayoutNavItem";

export const LkLayoutNav = () => {
  return (
    <NavigationMenu className="mt-4 max-w-full">
      <NavigationMenuList className="gap-20">
        <LkLayoutNavItem icon={<Home size={24} />} title="Главная" to="" />
        <LkLayoutNavItem icon={<UserCircle2 size={24} />} title="Профиль" to="details" />
        <LkLayoutNavItem icon={<Heart size={24} />} title="Избранное" to="favorites" />
        <LkLayoutNavItem icon={<FileText size={24} />} title="Мои резюме" to="resumes" />
        <LkLayoutNavItem icon={<Mails size={24} />} title="Отклики" to="applications" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
