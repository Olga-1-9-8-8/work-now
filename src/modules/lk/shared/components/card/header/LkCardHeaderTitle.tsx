import { Coins } from "lucide-react";
import { LanguageType } from "../../../../../shared/configs";
import { FavoriteButton } from "../../../../../shared/features/favorites";
import { useResponsiveContext } from "../../../../../shared/responsive";
import { UserEntity } from "../../../../../shared/types";
import { Badge } from "../../../../../shared/ui/badge/Badge";
import { TypographyH4 } from "../../../../../shared/ui/typography/TypographyH4";
import { getSalaryTitle } from "../../../../../shared/utils";
import { truncateText } from "../../../../../shared/utils/helpers";

interface LkCardHeaderTitleProps {
  id: number;
  position: string;
  language: LanguageType;
  salary?: number[];
  userName?: string;
  role?: UserEntity;
}

export const LkCardHeaderTitle = ({
  position,
  id,
  role,
  salary,
  language,
  userName,
}: LkCardHeaderTitleProps) => {
  const isMobile = useResponsiveContext();

  return (
    <TypographyH4 className=" flex flex-col gap-1 sm:gap-0">
      <div className="flex items-center gap-2">
        <span className="text-lg">{truncateText(position, 29)}</span>
        {!isMobile && (
          <Badge className="flex w-max gap-2" variant="success">
            <Coins size={18} />
            {getSalaryTitle(language, salary)}
          </Badge>
        )}

        <FavoriteButton id={id} role={role!} className="h-7 w-7 border-0" />
      </div>
      {isMobile && (
        <Badge className="flex w-max gap-2" variant="success">
          <Coins size={18} />
          {getSalaryTitle(language, salary)}
        </Badge>
      )}
      <strong className="text-base text-primary-extraDark">{userName}</strong>
    </TypographyH4>
  );
};
