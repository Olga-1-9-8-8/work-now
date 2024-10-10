import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { signUp as signUpApi } from "../api/apiAuth";
import { SignUpFormType } from "../types/form/SignUpFormType";

export const useSignUp = () => {
  const { t } = useLanguageSwitcher("shared");
  const { mutate: signUp, isPending: isSignUpPending } = useMutation({
    mutationFn: ({ username, password, email, phone, isCompany }: SignUpFormType) =>
      signUpApi({ username, password, email, phone, isCompany, t }),
    onSuccess: (data) => {
      toast.success(
        `${data.user?.user_metadata.username}, ${t("shared.api.auth.signUpSuccessTitle")}`,
      );
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        `${t("shared.api.auth.signUpGeneralError")} ${error.message ? `[ ${error.message}  ]` : ""} `,
      );
    },
  });

  return { signUp, isSignUpPending };
};
