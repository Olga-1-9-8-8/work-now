import { SearchFiltersBarDropdown } from "./dropdown/SearchFiltersBarDropdown";
import { SearchFiltersBarSelect } from "./select/SearchFiltersBarSelect";
import { SearchFiltersBarSwitch } from "./switch/SearchFiltersBarSwitch";

export const SearchFiltersBar = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:items-center ">
        <SearchFiltersBarSelect />
        <SearchFiltersBarSwitch />
      </div>
      <SearchFiltersBarDropdown />
    </div>
  );
};
