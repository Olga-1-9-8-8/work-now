import { filterConfig } from "../../../configs";
import { UniversalItemType } from "../../../types";
import { FilterSelect } from "./FilterSelect";

export const SearchFiltersBarSelect = () => {
  return (
    <ul className="flex flex-col flex-wrap gap-6 sm:flex-row">
      {Object.entries(filterConfig).map(([title, option]) => (
        <li key={title}>
          <FilterSelect
            filteredField={title}
            title={option.title}
            options={[...option.items] as Required<UniversalItemType<string>>[]}
          />
        </li>
      ))}
    </ul>
  );
};
