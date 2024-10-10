import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { deleteAccount as deleteAccountApi } from "../api/apiAuth";

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");

  const navigate = useNavigate();

  const { mutate: deleteAccount, isPending: isAccountDeleting } = useMutation({
    mutationFn: deleteAccountApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      navigate("/login", { replace: true });
      toast.error(t("shared.api.deleteAccountToastTitle"));
    },
  });

  return { deleteAccount, isAccountDeleting };
};
