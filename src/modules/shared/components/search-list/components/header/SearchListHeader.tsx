import { Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../services/auth";
import { UserEntity } from "../../../../types";
import { getRightNounWordDeclension } from "../../../../utils/helpers";
import { CreateButton } from "../../../buttons";
import { SearchListTitle } from "./SearchListTitle";

interface SearchListHeaderProps {
  isHiring?: boolean;
  isLoading: boolean;
  total?: number;
}

export const SearchListHeader = ({ total, isHiring, isLoading }: SearchListHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, role, isUserLoading } = useUser();

  const canShowCreateButton =
    !isUserLoading &&
    (!isAuthenticated || role === (isHiring ? UserEntity.Person : UserEntity.Company));

  const headerTitle = isHiring
    ? getRightNounWordDeclension(total ?? 0, "ваканс", ["ия", "ии", "ий"])
    : `${total ?? 0} резюме`;

  return (
    <div className="flex min-h-10 flex-col items-start justify-between gap-4 md:flex-row">
      <SearchListTitle
        title={
          <p className="flex gap-2">
            <span>Найдено</span>
            {isLoading ? (
              <span className="flex items-center ">
                <Loader2 className="h-5 w-5 animate-spin text-primary-light" />
                {isHiring ? "вакансий" : "резюме"}
              </span>
            ) : (
              <span className="word-spacing-wide">{headerTitle}</span>
            )}
          </p>
        }
      />
      {canShowCreateButton && (
        <CreateButton
          title={isHiring ? "Создать новое резюме" : "Создать новую вакансию"}
          onClick={() =>
            navigate(`/${isHiring ? "resumes" : "vacancies"}/creation`, {
              state: {
                from: location.pathname,
                title: `Назад в Список ${isHiring ? "вакансий" : "резюме"}`,
              },
            })
          }
        />
      )}
    </div>
  );
};
