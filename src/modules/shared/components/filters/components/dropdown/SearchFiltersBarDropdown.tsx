import { sortConfig } from "../../../../configs";
import { UniversalItemType } from "../../../../types";
import { FilteredDropdownMenu } from "./FilteredDropdownMenu";

export const SearchFiltersBarDropdown = () => {
  return (
    <ul className="flex flex-wrap gap-6 pt-8">
      {Object.entries(sortConfig).map(([title, option]) => {
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
