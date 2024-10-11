import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { addApply as addApplyApi } from "../api/apiApplies";

export const useAddApply = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");

  const { isPending: isApplyAdding, mutate: addApply } = useMutation({
    mutationFn: (id: number | string) => addApplyApi(id, t),
    onSuccess: (data) => {
      toast.success(
        data?.isCompanyRole
          ? t("shared.api.addApplyResumeSuccess", { position: data?.position })
          : t("shared.api.addApplyVacancySuccess", { position: data?.position }),
      );
      queryClient.invalidateQueries({
        queryKey: ["applies"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resume" : "vacancy", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addApply, isApplyAdding };
};
