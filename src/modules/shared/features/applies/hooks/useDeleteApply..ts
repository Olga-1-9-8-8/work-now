import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { deleteApply as deleteApplyApi } from "../api/apiApplies";

export const useDeleteApply = () => {
  const queryClient = useQueryClient();

  const { t } = useLanguageSwitcher("shared");

  const { isPending: isApplyDeleting, mutate: deleteApply } = useMutation({
    mutationFn: (id: number) => deleteApplyApi(id, t),
    onSuccess: (data) => {
      toast.error(
        data?.isCompanyRole
          ? t("shared.api.removeApplyResumeSuccess", { position: data?.position })
          : t("shared.api.removeApplyVacancySuccess", { position: data?.position }),
      );
      queryClient.invalidateQueries({
        queryKey: ["applies"],
      });
      queryClient.invalidateQueries({
        queryKey: ["counts"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resume" : "vacancy", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteApply, isApplyDeleting };
};
