import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../services/auth";
import { UserEntity } from "../../../types";
import { Skeleton } from "../../../ui/skeleton/Skeleton";
import { getRightNounWordDeclension } from "../../../utils/helpers";
import { CreateButton } from "../../buttons";
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
          <>
            Найдено{" "}
            {isLoading ? <Skeleton className="h-7 w-[130px]" /> : <span>{headerTitle}</span>}
          </>
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
