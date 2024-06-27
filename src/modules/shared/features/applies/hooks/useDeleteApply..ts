import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteApply as deleteApplyApi } from "../api/apiApplies";

export const useDeleteApply = () => {
  const queryClient = useQueryClient();

  const { isPending: isApplyDeleting, mutate: deleteApply } = useMutation({
    mutationFn: deleteApplyApi,
    onSuccess: () => {
      toast.error(`Успешно удалено из Откликов`);
      queryClient.invalidateQueries({
        queryKey: ["profileApplies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteApply, isApplyDeleting };
};
