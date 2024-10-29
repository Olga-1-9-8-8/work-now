import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { logout as logoutApi } from "../api/apiAuth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLogoutPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.error(t("shared.api.logoutToastSuccessTitle"));
    },
  });

  return { logout, isLogoutPending };
};
