import { ReactNode, useCallback, useState } from "react";
import { useUrl } from "../../../hooks";
import { SearchListCollapsibleInputs } from "./inputs/SearchListCollapsibleInputs";
import { SearchListSideBar } from "./side-bar/SearchListSideBar";

interface SearchListAdditionalFiltersProps {
  isHiring: boolean;
  children: ReactNode;
}

export const SearchListAdditionalFilters = ({
  isHiring,
  children,
}: SearchListAdditionalFiltersProps) => {
  const { getParam } = useUrl();

  const [searchTerms, setSearchTerms] = useState(() => ({
    position: getParam("position") || "",
    cities: getParam("cities") || "",
    username: getParam("username") || "",
  }));

  const handleSearchTermChange = useCallback((key: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [key]: value }));
  }, []);

  return (
    <div className="flex gap-4 py-4">
      <SearchListSideBar
        isHiring={isHiring}
        searchTerms={searchTerms}
        onSearchTermChange={handleSearchTermChange}
      />
      <div className="flex-1">
        <SearchListCollapsibleInputs
          isHiring={isHiring}
          searchTerms={searchTerms}
          onSearchTermChange={handleSearchTermChange}
        />
        {children}
      </div>
    </div>
  );
};
