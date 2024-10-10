import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { updateUser as updateUserApi } from "../api/apiAuth";
import { ProfileType } from "../types/ProfileType";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");

  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserApi,
    onMutate: (values) => {
      const userData = queryClient.getQueryData<{ id: string }>(["user"]);

      queryClient.cancelQueries({ queryKey: ["profile", userData?.id] });

      const oldProfile: ProfileType | undefined = queryClient.getQueryData([
        "profile",
        userData?.id,
      ]);

      queryClient.setQueryData(["profile", userData?.id], {
        ...oldProfile,
        ...values,
      });

      return () => queryClient.setQueryData(["profile", userData?.id], oldProfile);
    },
    onSuccess: ({ user: data }) => {
      queryClient.setQueryData(["user"], data);
      toast.success(`${data.user_metadata.username}, ${t("shared.api.updateUserSuccessTitle")}`);
    },
    onError: (err, values, callback) => {
      if (callback) {
        callback();
      }
      toast.error(err.message);
    },

    onSettled: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile", data?.user?.id] });
    },
  });

  return { updateUser, isUpdatingUser };
};
