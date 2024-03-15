import { Logo } from "../Logo";
import { FooterNavigationList } from "./list/FooterNavigationList";

export const FooterNavigation = () => {
  return (
    <div className="flex items-center">
      <div className="flex grow  flex-row items-center gap-10 px-8 sm:gap-0 md:gap-2 md:px-0">
        <Logo isShort />
        <FooterNavigationList />
      </div>
      <p className="text-nowrap text-sm text-white ">2024 - 2024 © WorkNow</p>
    </div>
  );
};
