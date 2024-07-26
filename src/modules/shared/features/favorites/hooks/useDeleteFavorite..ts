import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteFavorite as deleteFavoriteApi } from "../api/apiFavorites";

export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();

  const { isPending: isFavoriteDeleting, mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteApi,
    onSuccess: (data) => {
      toast.error(
        `${data?.isCompanyRole ? "Резюме" : "Вакансия"} ${data?.position} успешно удалено из Избранного`,
      );
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resumes" : "vacancies", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteFavorite, isFavoriteDeleting };
};
