import { Outlet, useLocation } from "react-router-dom";
import { UserSearchItems } from "../../../configs/usersSearchConfig";
import { useMediaQuery } from "../../../responsive";
import { Card } from "../../../ui/card/Card";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { SideBarItem } from "./item/SideBarItem";

export interface SideBarProps {
  items: UserSearchItems[];
}

export const SideBar = ({ items }: SideBarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex">
      {isDesktop && (
        <aside className="flex w-[24rem] flex-col gap-8 rounded-lg py-4 pb-10 pl-8 pr-6">
          {items.map((item) => (
            <Card key={item.title} className="p-6">
              <TypographyH5 className="text-nowrap">{item.title}</TypographyH5>
              {item.items ? <SideBarItem items={item.items} pathname={pathname} /> : null}
            </Card>
          ))}
        </aside>
      )}

      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};
