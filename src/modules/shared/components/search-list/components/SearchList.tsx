import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../services/auth";
import { UserEntity } from "../../../types";
import { PageContainer } from "../../../ui/layout";
import { getRightNounWordDeclension } from "../../../utils/helpers";
import { CreateButton } from "../../buttons";
import { SearchFiltersBar } from "../../filters";
import { SearchBar } from "../../search-bar";
import { SideBar } from "../../side-bar";
import { SearchListHeader } from "./SearchListHeader";

interface SearchListProps {
  isHiring?: boolean;
  total?: number;
  children: ReactNode;
}

export const SearchList = ({ total, isHiring, children }: SearchListProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useUser();

  const canShow = !isAuthenticated || role === (isHiring ? UserEntity.Person : UserEntity.Company);

  return (
    <PageContainer>
      <div className="flex flex-col gap-6 border-b-2 border-primary py-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <SearchListHeader
            title={
              isHiring
                ? getRightNounWordDeclension(total ?? 0, "ваканс", ["ия", "ии", "ий"])
                : `${total ?? 0} резюме`
            }
          />
          {canShow && (
            <CreateButton
              title={isHiring ? "Создать новое резюме" : "Создать новую вакансию"}
              onClick={() => navigate(`/${isHiring ? "resumes" : "vacancies"}/creation`)}
            />
          )}
        </div>
        <SearchFiltersBar />
      </div>
      <div className="flex gap-4 py-4">
        <SideBar title={isHiring ? "вакансии" : "резюме"} />
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
