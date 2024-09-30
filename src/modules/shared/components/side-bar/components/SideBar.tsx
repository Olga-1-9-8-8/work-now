import { searchConfig } from "../../../configs";
import { UniversalItemsWithTitleType } from "../../../types";

interface SideBarProps {
  isHiring?: boolean;
  render: (key: string, items: UniversalItemsWithTitleType) => JSX.Element;
}

export const SideBar = ({ isHiring, render }: SideBarProps) => {
  return (
    <aside className="w-[16rem] flex-col gap-2 rounded-lg lg:w-[20rem]">
      {Object.entries(searchConfig).map(([key, item]) => {
        if (item.isVacancyOnly && !isHiring) return null;
        return render(key, item);
      })}
    </aside>
  );
};
