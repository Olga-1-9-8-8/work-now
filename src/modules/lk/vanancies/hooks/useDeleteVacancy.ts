import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { deleteVacancy as deleteVacancyApi } from "../api/apiVacancies";

export const useDeleteVacancy = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("lk");

  const { isPending: isDeletingVacancy, mutate: deleteVacancy } = useMutation({
    mutationFn: (id: number) => deleteVacancyApi(id, t),
    onSuccess: (data) => {
      toast.success(t("lk.vacancies.api.deleteToastTitle", { position: data.position }));
      queryClient.invalidateQueries({
        queryKey: ["vacancies"],
      });
      queryClient.invalidateQueries({
        queryKey: ["counts"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteVacancy, isDeletingVacancy };
};
