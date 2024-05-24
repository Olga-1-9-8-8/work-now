import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../../ui/buttons/Button";

interface FavoriteButtonProps {
  onClick: (isFavorite: boolean) => void;
  disabled?: boolean;
  withTitle?: boolean;
  isInFavorite?: boolean;
}
export const FavoriteButton = ({
  disabled,
  withTitle,
  isInFavorite,
  onClick,
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (isInFavorite) setIsFavorite(isInFavorite);
  }, [isInFavorite]);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite((prevIsFavorite) => {
      onClick(!prevIsFavorite);
      return !prevIsFavorite;
    });
  };

  return (
    <Button
      className={`group w-full px-2 lg:w-auto ${isFavorite && "border-2 border-destructive"}`}
      variant={withTitle ? "secondary" : "outline"}
      disabled={disabled}
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
