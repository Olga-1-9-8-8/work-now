import { SearchFiltersBarDropdown } from "./components/dropdown/SearchFiltersBarDropdown";
import { SearchFiltersBarSelect } from "./components/select/SearchFiltersBarSelect";
import { SearchFiltersBarSwitch } from "./components/switch/SearchFiltersBarSwitch";

export const SearchFiltersBar = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6">
        <SearchFiltersBarSelect />
        <SearchFiltersBarSwitch />
      </div>
      <SearchFiltersBarDropdown />
    </div>
  );
};
