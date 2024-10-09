import { LanguageType, searchConfig } from "../../../configs";
import { UniversalItemsWithTitleType } from "../../../types";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";

interface SideBarProps {
  isHiring?: boolean;
  render: (key: string, items: UniversalItemsWithTitleType) => JSX.Element;
}

export const SideBar = ({ isHiring, render }: SideBarProps) => {
  const { language } = useLanguageSwitcher("shared");
  return (
    <aside className="w-[16rem] flex-col gap-2 rounded-lg lg:w-[20rem]">
      {Object.entries(searchConfig[language as LanguageType]).map(([key, item]) => {
        if (item.isVacancyOnly && !isHiring) return null;
        return render(key, item);
      })}
    </aside>
  );
};
