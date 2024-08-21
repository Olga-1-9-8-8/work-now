import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUser } from "../../../services/auth";
import { UserEntity } from "../../../types";
import { addView as addViewsApi } from "../api/apiViews";

export const useAddViews = (id: number, count: number, isHiring: boolean) => {
  const queryClient = useQueryClient();
  const { role, user } = useUser();
  const userId = user?.id;
  const canAddView = role === (isHiring ? UserEntity.Person : UserEntity.Company) && !!userId;

  const { mutate: addViews } = useMutation({
    mutationFn: () => addViewsApi({ id, count, isHiring, userId }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [data?.isHiring ? "vacancy" : "resume", data?.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addViews: canAddView ? addViews : undefined };
};
