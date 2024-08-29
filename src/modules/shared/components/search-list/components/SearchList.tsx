import { ReactNode } from "react";
import { PageContainer } from "../../../ui/layout";
import { SearchFiltersBar } from "../../filters";
import { SearchInput } from "../../search-bar/components/SearchInput";
import { SideBar } from "../../side-bar";
import { SearchListHeader } from "./SearchListHeader";

interface SearchListProps {
  isHiring?: boolean;
  isLoading: boolean;
  total?: number;
  children: ReactNode;
}

export const SearchList = ({ total, isHiring = false, isLoading, children }: SearchListProps) => {
  return (
    <PageContainer>
      <div className="flex flex-col gap-4 border-b-2 border-primary-extraDark py-4">
        <SearchListHeader total={total} isHiring={isHiring} isLoading={isLoading} />
        <SearchFiltersBar />
      </div>
      <div className="flex gap-4 py-4">
        <SideBar isHiring={isHiring} />
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <SearchInput />
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
