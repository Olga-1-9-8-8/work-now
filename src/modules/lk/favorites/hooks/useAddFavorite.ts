import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addFavorite as addFavoriteApi } from "../api/apiLkFavorites";

export const useAddFavorite = (resumeId: number, userId?: number) => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteAdding, mutate: addFavorite } = useMutation({
    mutationFn: () => addFavoriteApi(userId, resumeId),
    onSuccess: () => {
      toast.success(`Успешно добавлено из Избранное`);
      queryClient.invalidateQueries({
        queryKey: ["favorites", userId, resumeId],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addFavorite, isFavoriteAdding };
};
