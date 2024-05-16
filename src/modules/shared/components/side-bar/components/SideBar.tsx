import { searchConfig } from "../../../configs";
import { useResponsiveContext } from "../../../responsive";
import { Card } from "../../../ui/card/Card";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { capitalizeFirstLetter } from "../../../utils/helpers";
import { SideBarItem } from "./item/SideBarItem";

interface SideBarProps {
  title: "резюме" | "вакансии";
}

export const SideBar = ({ title }: SideBarProps) => {
  const isMobile = useResponsiveContext();

  if (isMobile) {
    return null;
  }

  return (
    <aside className="flex flex-col gap-8 rounded-lg lg:w-[20rem]">
      {Object.entries(searchConfig).map(([key, item]) => {
        if (item.isVacancyOnly && title === "резюме") return null;
        return (
          <Card key={key} className="p-6">
            <TypographyH5 className="text-nowrap">
              {capitalizeFirstLetter(title)} {item.title}
            </TypographyH5>
            <SideBarItem items={item.items} title={key} />
          </Card>
        );
      })}
    </aside>
  );
};
