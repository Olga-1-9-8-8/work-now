import { Link, useLocation } from "react-router-dom";
import { useResponsiveContext } from "../../../../../shared/responsive";
import { useAuthContext } from "../../../../../shared/services/auth";
import { UserEntity } from "../../../../../shared/types";
import { Badge } from "../../../../../shared/ui/badge/Badge";
import { CardDescription, CardTitle } from "../../../../../shared/ui/card/Card";
import { getSalaryTitle } from "../../../../../shared/utils";
import { formattedTimeString, truncateText } from "../../../../../shared/utils/helpers";

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

  return (
    <div>
      <div className="flex flex-col items-start gap-4 py-1 md:flex-row md:items-center">
        <Link
          to={`/${isCompany ? "vacancies" : "resumes"}/${id}`}
          state={{
            from: location.pathname,
            title: `Назад в ${isCompany ? "Мои вакансии" : "Мои резюме"}`,
          }}
        >
          <CardTitle className="text-primary-extraDark">
            {truncateText(position, isMobile ? 26 : 70)}
          </CardTitle>
        </Link>

        <Badge shape="square" variant="destructive">
          {getSalaryTitle(salary)}
        </Badge>
      </div>
      <div className="flex gap-4">
        <CardDescription>Создано {formattedTimeString(creationDate)}</CardDescription>
        {updatedDate && (
          <CardDescription>Обновлено {formattedTimeString(updatedDate)}</CardDescription>
        )}
      </div>
    </div>
  );
};
