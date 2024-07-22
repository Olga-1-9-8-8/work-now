import { Heart } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { UserEntity } from "../../../types";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useAddFavorite } from "../hooks/useAddFavorite";
import { useDeleteFavorite } from "../hooks/useDeleteFavorite.";

type FavoriteButtonProps = {
  id: number | string;
  role: UserEntity;
  withTitle?: boolean;
  isInFavorites?: boolean;
  tooltipContent?: string;
} & Omit<ButtonProps, "id">;

export const FavoriteButton = ({
  id,
  role,
  withTitle,
  isInFavorites,
  tooltipContent,
  ...props
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(isInFavorites);
  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();
  const { addFavorite, isFavoriteAdding } = useAddFavorite();

  useLayoutEffect(() => {
    if (isInFavorites) setIsFavorite(isInFavorites);
  }, [isInFavorites]);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite((prevIsFavorite) => {
      if (prevIsFavorite) {
        deleteFavorite({ id, role });
      } else {
        addFavorite({ id, role });
      }
      return !prevIsFavorite;
    });
  };

  return (
    <Tooltip
      content={tooltipContent ?? (isInFavorites ? "Удалить из Избранного" : "Добавить в Избранное")}
      className="w-48"
    >
      <div>
        <Button
          className={`group w-full px-2 lg:w-auto ${isFavorite && "border-2 border-destructive"}`}
          variant={withTitle ? "secondary" : "outline"}
          disabled={isFavoriteDeleting || isFavoriteAdding}
          size={withTitle ? "default" : "icon"}
          onClick={handleFavoriteClick}
          {...props}
        >
          <Heart
            className={`stroke-destructive group-hover:fill-destructive ${isFavorite && "fill-destructive"}`}
          />
          {withTitle && (
            <span className="ml-2">{isFavorite ? "Уже в Избранном" : "В Избранное"}</span>
          )}
        </Button>
      </div>
    </Tooltip>
  );
};
