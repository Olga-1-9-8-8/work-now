import { ReactNode } from "react";
import { PageContainer } from "../../../ui/layout";
import { SearchFiltersBar } from "../../filters";
import { SearchBar } from "../../search-bar";
import { SideBar } from "../../side-bar";
import { SearchListHeader } from "./SearchListHeader";

interface SearchListProps {
  title: string;
  total?: number;
  button?: ReactNode;
  children: ReactNode;
}

export const SearchList = ({ total, button, title, children }: SearchListProps) => {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6 border-b-2 border-primary py-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <SearchListHeader title={title} total={total} />
          {button}
        </div>
        <SearchFiltersBar />
      </div>
      <div className="flex gap-4 py-4">
        <SideBar />
        <div className="flex-1 ">
          <div className="flex flex-col gap-4">
            <SearchBar />
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
