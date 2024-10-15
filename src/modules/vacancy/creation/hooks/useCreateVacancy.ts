import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { createEditVacancy } from "../../shared/api/apiVacancies";
import { CreateEditVacancyType } from "../../shared/types";

export const useCreateVacancy = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("vacancy");

  const { mutate: createVacancy, isPending: isCreatingVacancy } = useMutation({
    mutationFn: (newVacancy: CreateEditVacancyType) => createEditVacancy(newVacancy, t),
    onSuccess: ({ position }) => {
      toast.success(t("vacancy.api.createToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
      queryClient.invalidateQueries({ queryKey: ["counts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createVacancy, isCreatingVacancy };
};
