import { Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../services/auth";
import { UserEntity } from "../../../../types";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher";
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

  const { t } = useLanguageSwitcher("shared");

  const canShowCreateButton =
    !isUserLoading &&
    (!isAuthenticated || role === (isHiring ? UserEntity.Person : UserEntity.Company));

  return (
    <div className="flex min-h-10 flex-col items-start justify-between gap-4 md:flex-row">
      <SearchListTitle
        title={
          <p className="flex gap-2">
            <span>{t("shared.search.header.title")}</span>
            {isLoading ? (
              <span className="flex items-center ">
                <Loader2 className="h-5 w-5 animate-spin text-primary-light" />
                {isHiring ? t("shared.vacancy") : t("shared.resume")}
              </span>
            ) : (
              <span className="word-spacing-wide">
                {isHiring
                  ? t("shared.search.header.vacancy", { count: total ?? 0 })
                  : t("shared.search.header.resume", { count: total ?? 0 })}
              </span>
            )}
          </p>
        }
      />
      {canShowCreateButton && (
        <CreateButton
          title={
            isHiring
              ? t("shared.search.header.button.title.resume")
              : t("shared.search.header.button.title.vacancy")
          }
          onClick={() =>
            navigate(`/${isHiring ? "resumes" : "vacancies"}/creation`, {
              state: {
                from: location.pathname,
                title: ` ${isHiring ? t("shared.search.header.button.navigate.title.vacancy") : t("shared.search.header.button.navigate.title.resume")}`,
              },
            })
          }
        />
      )}
    </div>
  );
};
