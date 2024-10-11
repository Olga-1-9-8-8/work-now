import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { deleteFavorite as deleteFavoriteApi } from "../api/apiFavorites";

export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();

  const { t } = useLanguageSwitcher("shared");

  const { isPending: isFavoriteDeleting, mutate: deleteFavorite } = useMutation({
    mutationFn: (id: number | string) => deleteFavoriteApi(id, t),
    onSuccess: (data) => {
      toast.error(
        data?.isCompanyRole
          ? t("shared.api.removeFavoriteResumeSuccess", { position: data?.position })
          : t("shared.api.removeFavoriteVacancySuccess", { position: data?.position }),
      );
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
      queryClient.invalidateQueries({
        queryKey: ["applies"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resume" : "vacancy", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteFavorite, isFavoriteDeleting };
};
