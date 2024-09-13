import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createEditVacancy } from "../../shared/api/apiVacancies";

export const useCreateVacancy = () => {
  const queryClient = useQueryClient();

  const { mutate: createVacancy, isPending: isCreatingVacancy } = useMutation({
    mutationFn: createEditVacancy,
    onSuccess: ({ position }) => {
      toast.success(`Новое вакансия ${position} создана`);
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createVacancy, isCreatingVacancy };
};
