import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { createEditVacancy } from "../../shared/api/apiVacancies";
import { CreateEditVacancyType } from "../../shared/types";

export const useEditVacancy = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("vacancy");

  const { mutate: editVacancy, isPending: isEditing } = useMutation({
    mutationFn: (newVacancy: CreateEditVacancyType) => createEditVacancy(newVacancy, t),
    onSuccess: ({ position }) => {
      toast.success(t("vacancy.api.editToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editVacancy, isEditing };
};
