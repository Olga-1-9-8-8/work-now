import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addResumesApply as addApplyApi } from "../api/apiLkApplies";

export const useAddApply = () => {
  const queryClient = useQueryClient();

  const { isPending: isApplyAdding, mutate: addApply } = useMutation({
    mutationFn: addApplyApi,
    onSuccess: () => {
      toast.success(`Успешно добавлено в Отклики`);
      queryClient.invalidateQueries({
        queryKey: ["profileApplies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addApply, isApplyAdding };
};
