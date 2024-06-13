import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateProfile as updateProfileApi } from "../api/apiProfiles";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success("Личные данные успешно обновлены");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProfile, isUpdatingProfile };
};
