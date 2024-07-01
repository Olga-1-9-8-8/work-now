import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addFavorite as addFavoriteApi } from "../api/apiFavorites";

export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteAdding, mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteApi,
    onSuccess: () => {
      toast.success(`Успешно добавлено в Избранное`);
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addFavorite, isFavoriteAdding };
};