import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addResumesFavorite as addFavoriteApi } from "../api/apiLkFavorites";

export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteAdding, mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteApi,
    onSuccess: () => {
      toast.success(`Успешно добавлено в Избранное`);
      queryClient.invalidateQueries({
        queryKey: ["profileFavorites"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addFavorite, isFavoriteAdding };
};
