import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { addFavorite as addFavoriteApi } from "../api/apiFavorites";

export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  const { t } = useLanguageSwitcher("shared");

  const { isPending: isFavoriteAdding, mutate: addFavorite } = useMutation({
    mutationFn: (id: number) => addFavoriteApi(id, t),
    onSuccess: (data) => {
      toast.success(
        data?.isCompanyRole
          ? t("shared.api.addFavoriteResumeSuccess", { position: data?.position })
          : t("shared.api.addFavoriteVacancySuccess", { position: data?.position }),
      );
      queryClient.invalidateQueries({
        queryKey: ["counts"],
      });
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
