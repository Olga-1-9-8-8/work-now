import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUser as updateUserApi } from "../api/apiAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      toast.success("Личные данные успешно обновлены");

      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdatingUser };
};
