import { ReactNode } from "react";
import { useSearchListFiltersSearchTerm } from "../hooks/useSearchListFiltersSearchTerm";
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
  const { searchTerms, onSearchTermChange } = useSearchListFiltersSearchTerm();
  return (
    <div className="flex gap-4 py-4">
      <SearchListSideBar
        isHiring={isHiring}
        searchTerms={searchTerms}
        onSearchTermChange={onSearchTermChange}
      />
      <div className="flex-1">
        <SearchListCollapsibleInputs
          isHiring={isHiring}
          searchTerms={searchTerms}
          onSearchTermChange={onSearchTermChange}
        />
        {children}
      </div>
    </div>
  );
};
