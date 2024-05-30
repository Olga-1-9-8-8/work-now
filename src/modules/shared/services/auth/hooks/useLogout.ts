import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logout as logoutApi } from "../api/apiAuth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLogoutPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.error(`Вы вышли из своего аккаунта`);
    },
  });

  return { logout, isLogoutPending };
};
