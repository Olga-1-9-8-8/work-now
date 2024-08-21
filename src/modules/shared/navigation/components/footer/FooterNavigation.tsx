import { getYear } from "date-fns";
import { Logo } from "../Logo";
import { FooterNavigationList } from "./list/FooterNavigationList";

export const FooterNavigation = () => {
  return (
    <div className="flex items-center justify-between pr-4 xl:pr-0">
      <div className="flex items-center gap-4">
        <Logo isShort />
        <FooterNavigationList />
      </div>
      <p className="text-nowrap text-sm text-white ">2024 - {getYear(new Date())} © WorkNow</p>
    </div>
  );
};
