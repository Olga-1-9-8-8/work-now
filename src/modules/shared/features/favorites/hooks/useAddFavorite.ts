import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addFavorite as addFavoriteApi } from "../api/apiFavorites";

export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteAdding, mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteApi,
    onSuccess: (data) => {
      toast.success(
        `${data?.isCompanyRole ? "Резюме" : "Вакансия"} ${data?.position} успешно добавлено в Избранное`,
      );
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resume" : "vacancy", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addFavorite, isFavoriteAdding };
};
