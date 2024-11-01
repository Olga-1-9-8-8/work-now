import { Link, useLocation } from "react-router-dom";
import { LanguageType } from "../../../../../shared/configs";
import { useResponsiveContext } from "../../../../../shared/responsive";
import { useAuthContext } from "../../../../../shared/services/auth";
import { UserEntity } from "../../../../../shared/types";
import { Badge } from "../../../../../shared/ui/badge/Badge";
import { CardDescription, CardTitle } from "../../../../../shared/ui/card/Card";
import { getSalaryTitle } from "../../../../../shared/utils";
import { formattedTimeString, truncateText } from "../../../../../shared/utils/helpers";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher";

interface LkItemCardHeaderProps {
  id: number;
  position: string;
  salary?: number[];
  updatedDate?: Date;
  creationDate: Date;
}

export const LkItemCardHeader = ({
  id,
  position,
  salary,
  updatedDate,
  creationDate,
}: LkItemCardHeaderProps) => {
  const { role } = useAuthContext();
  const isCompany = role === UserEntity.Company;
  const isMobile = useResponsiveContext();
  const location = useLocation();
  const { t, language } = useLanguageSwitcher("lk");

  return (
    <div>
      <div className="flex flex-col items-start gap-4 py-1 md:flex-row md:items-center">
        <Link
          to={`/${isCompany ? "vacancies" : "resumes"}/${id}`}
          state={{
            from: `${location.pathname}${location.search}`,
            title: `${isCompany ? t("lk.vacancies.backButtonTitle") : t("lk.resumes.backButtonTitle")}`,
          }}
        >
          <CardTitle className="text-lg text-primary-extraDark sm:text-xl">
            {truncateText(position, isMobile ? 27 : 70)}
          </CardTitle>
        </Link>

        <Badge shape="square" variant="destructive">
          {getSalaryTitle(language as LanguageType, salary)}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <CardDescription className="font-medium">
          {t("lk.card.description")} {formattedTimeString(creationDate, language as LanguageType)}
        </CardDescription>
        {updatedDate && (
          <CardDescription className="mr-6 font-medium">
            {t("lk.card.updated")} {formattedTimeString(updatedDate, language as LanguageType)}
          </CardDescription>
        )}
      </div>
    </div>
  );
};
