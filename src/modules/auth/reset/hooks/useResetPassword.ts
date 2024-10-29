import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { resetPassword as resetPasswordApi } from "../api/apiAuthReset";
import { ResetPasswordFormType } from "../types/ResetPasswordFormType";

export const useResetPassword = () => {
  const { t } = useLanguageSwitcher("shared");

  const { mutate: resetPassword, isPending: isResetPasswordPending } = useMutation({
    mutationFn: ({ email }: ResetPasswordFormType) => resetPasswordApi({ email }),
    onSuccess: () => {
      toast.success(t("shared.api.resetPasswordToastSuccessTitle"));
    },
    onError: (error) => {
      console.log(error);
      toast.error(t("shared.api.resetPasswordToastErrorTitle"));
    },
  });

  return { resetPassword, isResetPasswordPending };
};
