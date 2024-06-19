import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { signUp as signUpApi } from "../api/apiAuth";

export const useSignUp = () => {
  const { mutate: signUp, isPending: isSignUpPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(
        `${data.user?.user_metadata.username}, Вы успешно создали новый аккаунт.Мы выслали на Вашу почту ссылку для активации аккаунта`,
      );
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        `Ошибка при создании аккаунта : ${error.message ? `[ ${error.message}  ]` : ""} `,
      );
    },
  });

  return { signUp, isSignUpPending };
};
