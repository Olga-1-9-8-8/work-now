import { popularFilterConfig } from "../../../configs";
import { UniversalItemType } from "../../../types";
import { FilterSwitch } from "./FilterSwitch";

export const SearchFiltersBarSwitch = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-6 sm:flex-row ">
      {Object.entries(popularFilterConfig).map(([title, item]) => {
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
