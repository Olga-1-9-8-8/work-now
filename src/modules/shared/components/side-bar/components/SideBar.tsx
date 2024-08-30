import { searchConfig } from "../../../configs";
import { UniversalItemType } from "../../../types";
import { SideBarItem } from "./SideBarItem";

interface SideBarProps {
  isHiring?: boolean;
}

export const SideBar = ({ isHiring }: SideBarProps) => {
  return (
    <aside className="flex-col gap-2 rounded-lg lg:w-[20rem]">
      {Object.entries(searchConfig).map(([key, item]) => {
        if (item.isVacancyOnly && !isHiring) return null;
        return (
          <SideBarItem
            key={key}
            value={key}
            title={item.title}
            items={item.items as Required<UniversalItemType<string>>[]}
          />
        );
      })}
    </aside>
  );
};
