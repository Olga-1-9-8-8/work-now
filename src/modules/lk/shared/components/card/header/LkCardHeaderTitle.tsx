import { FavoriteButton } from "../../../../../shared/features/favorites";
import { useResponsiveContext } from "../../../../../shared/responsive";
import { UserEntity } from "../../../../../shared/types";
import { TypographyH4 } from "../../../../../shared/ui/typography/TypographyH4";

interface LkCardHeaderTitleProps {
  id: number;
  position: string;
  isInFavorites?: boolean;
  userName?: string;
  role?: UserEntity;
}

export const LkCardHeaderTitle = ({
  position,
  id,
  role,
  isInFavorites,
  userName,
}: LkCardHeaderTitleProps) => {
  const isMobile = useResponsiveContext();

  return (
    <div className="flex gap-1 md:items-center">
      <TypographyH4 className="flex flex-col gap-1 md:flex-row">
        <div className="flex items-center gap-2">
          <span>{position}</span>
          {isMobile && (
            <FavoriteButton
              id={id}
              role={role!}
              isInFavorites={isInFavorites}
              className="h-9 w-9 border-0"
            />
          )}
        </div>
        <strong className="text-primary-extraDark">{userName}</strong>
      </TypographyH4>
      {!isMobile && (
        <FavoriteButton
          id={id}
          role={role!}
          isInFavorites={isInFavorites}
          className="h-9 w-9 border-0"
        />
      )}
    </div>
  );
};
