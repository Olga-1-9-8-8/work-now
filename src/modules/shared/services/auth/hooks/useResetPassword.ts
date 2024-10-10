import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { resetPassword as resetPasswordApi } from "../api/apiAuth";
import { ResetPasswordFormType } from "../types/form/ResetPasswordFormType";

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
