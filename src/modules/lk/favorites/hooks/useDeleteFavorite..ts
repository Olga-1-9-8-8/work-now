import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteFavorite as deleteFavoriteApi } from "../api/apiLkFavorites";

export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteDeleting, mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteApi,
    onSuccess: () => {
      toast.error(`Успешно удалено из Избранного`);
      queryClient.invalidateQueries({
        queryKey: ["profileFavorites"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteFavorite, isFavoriteDeleting };
};
