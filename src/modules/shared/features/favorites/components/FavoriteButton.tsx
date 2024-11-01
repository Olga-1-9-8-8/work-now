import { Heart } from "lucide-react";
import { memo } from "react";
import { FaSpinner } from "react-icons/fa6";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { useFavorite } from "../hooks/useFavorite";
import { useHandleFavorite } from "../hooks/useHandleFavorite";

type FavoriteButtonProps = {
  id: number;
  withTitle?: boolean;
  tooltipContent?: string;
} & Omit<ButtonProps, "id">;

export const FavoriteButton = memo(
  ({ id, withTitle, tooltipContent, ...props }: FavoriteButtonProps) => {
    const { isInFavorites, isInFavoritesLoading } = useFavorite(id);
    const { t } = useLanguageSwitcher("shared");

    const { handleFavoriteClick, isFavoriteDeleting, isFavoriteAdding } = useHandleFavorite(
      id,
      isInFavorites,
    );
    const isDisabled = isInFavoritesLoading || isFavoriteDeleting || isFavoriteAdding;

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
            className={`group w-full px-2 lg:w-auto ${isInFavorites && "border-2 border-destructive"}`}
            variant={withTitle ? "secondary" : "outline"}
            disabled={isDisabled}
            size={withTitle ? "default" : "icon"}
            onClick={(e) => !isDisabled && handleFavoriteClick(e)}
            {...props}
          >
            {isInFavoritesLoading ? (
              <FaSpinner className="h-5 w-5 animate-spin-slow text-secondary" />
            ) : (
              <Heart
                className={`h-5 w-5 stroke-destructive group-hover:fill-destructive ${isInFavorites && "fill-destructive"}`}
              />
            )}

            {withTitle && (
              <span className="ml-2">
                {isInFavorites
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
