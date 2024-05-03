import { popularSearchOptionsConfig, searchOptionsConfig, sortOptionsConfig } from "../../configs";
import { FilterSelect } from "./FilterSelect";
import { FilterSwitch } from "./FilterSwitch";
import { FilteredDropdownMenu } from "./FilteredDropdownMenu";

export const SearchFiltersBar = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:items-center ">
        <ul className="flex flex-col flex-wrap gap-6 sm:flex-row">
          {Object.entries(searchOptionsConfig).map(([title, option]) => (
            <li key={title}>
              <FilterSelect filteredField={title} title={option.title} options={option.options} />
            </li>
          ))}
        </ul>

        <ul className="flex flex-row flex-wrap gap-6 sm:flex-row ">
          {Object.entries(popularSearchOptionsConfig).map(([title, item]) => {
            return item.options.map((option) => (
              <li key={option.value}>
                <FilterSwitch filteredField={title} option={option} />
              </li>
            ));
          })}
        </ul>
      </div>

      <ul className="flex flex-wrap gap-6 pt-8">
        {Object.entries(sortOptionsConfig).map(([title, option]) => {
          return (
            <li key={title}>
              <FilteredDropdownMenu
                sortedField={title}
                title={option.title}
                options={option.options}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
