import { Heart } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { UserEntity } from "../../../types";
import { Button } from "../../../ui/buttons/Button";
import { useAddFavorite } from "../hooks/useAddFavorite";
import { useDeleteFavorite } from "../hooks/useDeleteFavorite.";

interface FavoriteButtonProps {
  id: number | string;
  role: UserEntity;
  withTitle?: boolean;
  isInFavorites?: boolean;
}
export const FavoriteButton = ({ id, role, withTitle, isInFavorites }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
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
    <Button
      className={`group w-full px-2 lg:w-auto ${isFavorite && "border-2 border-destructive"}`}
      variant={withTitle ? "secondary" : "outline"}
      disabled={isFavoriteDeleting || isFavoriteAdding}
      size={withTitle ? "default" : "icon"}
      onClick={handleFavoriteClick}
    >
      <Heart
        className={`stroke-destructive group-hover:fill-destructive ${isFavorite && "fill-destructive"}`}
      />
      {withTitle && <span className="ml-2">{isFavorite ? "Уже в Избранном" : "В Избранное"}</span>}
    </Button>
  );
};
