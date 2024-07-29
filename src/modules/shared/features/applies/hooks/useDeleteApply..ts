import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteApply as deleteApplyApi } from "../api/apiApplies";

export const useDeleteApply = () => {
  const queryClient = useQueryClient();

  const { isPending: isApplyDeleting, mutate: deleteApply } = useMutation({
    mutationFn: deleteApplyApi,
    onSuccess: (data) => {
      toast.error(
        `${data?.isCompanyRole ? "Резюме" : "Вакансия"} ${data?.position} успешно удалено из Откликов`,
      );
      queryClient.invalidateQueries({
        queryKey: ["applies"],
      });
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resumes" : "vacancies", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteApply, isApplyDeleting };
};
