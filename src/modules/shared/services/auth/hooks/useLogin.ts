import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { login as loginApi } from "../api/apiAuth";
import { LogInFormType } from "../types/LogInFormType";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: ({ email, password }: LogInFormType) => loginApi({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(`${data.user?.user_metadata?.userName},вы успешно вошли в свой аккаунт`);
      navigate("/resumes", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Неверный логин или пароль");
    },
  });

  return { login, isLoginPending };
};
