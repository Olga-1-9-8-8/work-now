import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { login as loginApi } from "../api/apiAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(`${data.user?.user_metadata?.full_name},вы успешно вошли в свой аккаунт`);
      navigate("/resumes", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Неверный логин или пароль");
    },
  });

  return { login, isLogin };
};
