import { useCallback } from "react";
import { useAddFavorite } from "./useAddFavorite";
import { useDeleteFavorite } from "./useDeleteFavorite.";

export const useHandleFavorite = (id: number, isInFavorites?: boolean) => {
  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();
  const { addFavorite, isFavoriteAdding } = useAddFavorite();

  const handleFavoriteClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (isInFavorites) {
        deleteFavorite(id);
      } else {
        addFavorite(id);
      }
    },
    [addFavorite, deleteFavorite, id, isInFavorites],
  );

  return { handleFavoriteClick, isFavoriteDeleting, isFavoriteAdding };
};
