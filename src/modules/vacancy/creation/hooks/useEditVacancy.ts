import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createEditVacancy } from "../../shared/api/apiVacancies";

export const useEditVacancy = () => {
  const queryClient = useQueryClient();

  const { mutate: editVacancy, isPending: isEditing } = useMutation({
    mutationFn: createEditVacancy,
    onSuccess: () => {
      toast.success("Вакансия успешно отредактирована");
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editVacancy, isEditing };
};
