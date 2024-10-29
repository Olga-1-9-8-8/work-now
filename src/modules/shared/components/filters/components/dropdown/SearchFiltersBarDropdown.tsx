import { LanguageType, sortConfig } from "../../../../configs";
import { UniversalItemType } from "../../../../types";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher";
import { FilteredDropdownMenu } from "./FilteredDropdownMenu";

export const SearchFiltersBarDropdown = () => {
  const { language } = useLanguageSwitcher("shared");
  return (
    <ul className="flex flex-wrap gap-6 pt-8">
      {Object.entries(sortConfig[language as LanguageType]).map(([title, option]) => {
        return (
          <li key={title}>
            <FilteredDropdownMenu
              sortedField={title}
              options={option.items as Required<UniversalItemType<string>>[]}
            />
          </li>
        );
      })}
    </ul>
  );
};
