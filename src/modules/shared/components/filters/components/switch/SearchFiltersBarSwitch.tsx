import { LanguageType, popularFilterConfig } from "../../../../configs";
import { UniversalItemType } from "../../../../types";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { FilterSwitch } from "./FilterSwitch";

export const SearchFiltersBarSwitch = () => {
  const { language } = useLanguageSwitcher("shared");
  return (
    <ul className="hidden flex-row flex-wrap gap-6 sm:flex sm:flex-row ">
      {Object.entries(popularFilterConfig[language as LanguageType]).map(([title, item]) => {
        return item.items.map((option) => (
          <li key={option.value}>
            <FilterSwitch
              filteredField={title}
              option={option as Required<UniversalItemType<string>>}
            />
          </li>
        ));
      })}
    </ul>
  );
};
