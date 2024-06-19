import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { resetPassword as resetPasswordApi } from "../api/apiAuth";
import { ResetPasswordFormType } from "../types/ResetPasswordFormType";

export const useResetPassword = () => {
  const { mutate: resetPassword, isPending: isResetPasswordPending } = useMutation({
    mutationFn: ({ email }: ResetPasswordFormType) => resetPasswordApi({ email }),

    onSuccess: () => {
      toast.success(`Вам на почту  отправлено письмо с инструкциями по восстановлению пароля`);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Неверный логин");
    },
  });

  return { resetPassword, isResetPasswordPending };
};
