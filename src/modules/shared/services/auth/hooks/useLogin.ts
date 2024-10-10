import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserEntity } from "../../../types";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { login as loginApi } from "../api/apiAuth";
import { LogInFormType } from "../types/form/LogInFormType";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: ({ email, password }: LogInFormType) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(
        `${data.user?.user_metadata?.username ?? t("shared.anonymous")}, ${t("shared.api.loginToastSuccessTitle")}`,
      );
      navigate(
        `${data.user?.user_metadata?.role === UserEntity.Company ? `/resumes` : `/vacancies`}`,
        { replace: true },
      );
    },
    onError: (error) => {
      console.log(error);
      toast.error(t("shared.api.loginToastErrorTitle"));
    },
  });

  return { login, isLoginPending };
};
