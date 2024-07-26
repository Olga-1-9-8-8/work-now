import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addApply as addApplyApi } from "../api/apiApplies";

export const useAddApply = () => {
  const queryClient = useQueryClient();

  const { isPending: isApplyAdding, mutate: addApply } = useMutation({
    mutationFn: addApplyApi,
    onSuccess: (data) => {
      toast.success(
        `${data?.isCompanyRole ? "Резюме" : "Вакансия"} ${data?.position} успешно добавлено в Отклики`,
      );
      queryClient.invalidateQueries({
        queryKey: ["applies"],
      });
      queryClient.invalidateQueries({
        queryKey: [data?.isCompanyRole ? "resumes" : "vacancies", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addApply, isApplyAdding };
};
