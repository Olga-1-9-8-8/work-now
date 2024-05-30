import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUser as updateUserApi } from "../api/apiAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("Личные данные успешно обновлены");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdatingUser };
};
