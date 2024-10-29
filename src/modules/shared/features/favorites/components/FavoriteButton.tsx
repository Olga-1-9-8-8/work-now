import { Heart } from "lucide-react";
import { memo, useLayoutEffect, useState } from "react";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { useAddFavorite } from "../hooks/useAddFavorite";
import { useDeleteFavorite } from "../hooks/useDeleteFavorite.";
import { useFavorite } from "../hooks/useFavorite";

type FavoriteButtonProps = {
  id: number;
  withTitle?: boolean;
  tooltipContent?: string;
} & Omit<ButtonProps, "id">;

export const FavoriteButton = memo(
  ({ id, withTitle, tooltipContent, ...props }: FavoriteButtonProps) => {
    const { isInFavorites, isInFavoritesLoading } = useFavorite(id);

    const [isFavorite, setIsFavorite] = useState(isInFavorites);
    const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();
    const { addFavorite, isFavoriteAdding } = useAddFavorite();

    const { t } = useLanguageSwitcher("shared");

    useLayoutEffect(() => {
      if (isInFavorites) setIsFavorite(isInFavorites);
    }, [isInFavorites]);

    const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsFavorite((prevIsFavorite) => {
        if (prevIsFavorite) {
          deleteFavorite(id);
        } else {
          addFavorite(id);
        }
        return !prevIsFavorite;
      });
    };

    return (
      <Tooltip
        content={
          tooltipContent ??
          (isInFavorites ? t("shared.favorites.tooltip.remove") : t("shared.favorites.tooltip.add"))
        }
        className="w-48"
      >
        <div>
          <Button
            className={`group w-full px-2 lg:w-auto ${isFavorite && "border-2 border-destructive"}`}
            variant={withTitle ? "secondary" : "outline"}
            disabled={isFavoriteDeleting || isFavoriteAdding || isInFavoritesLoading}
            size={withTitle ? "default" : "icon"}
            onClick={handleFavoriteClick}
            {...props}
          >
            <Heart
              className={`h-5 w-5 stroke-destructive group-hover:fill-destructive ${isFavorite && "fill-destructive"}`}
            />
            {withTitle && (
              <span className="ml-2">
                {isFavorite
                  ? t("shared.favorites.button.removed")
                  : t("shared.favorites.button.add")}
              </span>
            )}
          </Button>
        </div>
      </Tooltip>
    );
  },
);
