import { userSearchConfig } from "../../../configs/usersSearchConfig";
import { useResponsiveContext } from "../../../responsive";
import { Card } from "../../../ui/card/Card";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { SideBarItem } from "./item/SideBarItem";

export const SideBar = () => {
  const isMobile = useResponsiveContext();

  if (isMobile) {
    return null;
  }

  return (
    <aside className="flex flex-col gap-8 rounded-lg lg:w-[20rem]">
      {Object.entries(userSearchConfig).map(([title, item]) => (
        <Card key={title} className="p-6">
          <TypographyH5 className="text-nowrap">{item.title}</TypographyH5>
          <SideBarItem items={item.items} title={title} />
        </Card>
      ))}
    </aside>
  );
};
