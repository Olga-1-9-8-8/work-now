import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteVacancy as deleteVacancyApi } from "../api/apiVacancies";

export const useDeleteVacancy = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeletingVacancy, mutate: deleteVacancy } = useMutation({
    mutationFn: deleteVacancyApi,
    onSuccess: (data) => {
      toast.success(`Вакансия ${data.position} успешно удалена`);
      queryClient.invalidateQueries({
        queryKey: ["vacancies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteVacancy, isDeletingVacancy };
};
