import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { deleteResume as deleteResumeApi } from "../api/apiResumes";

export const useDeleteResume = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("lk");

  const { isPending: isDeleting, mutate: deleteResume } = useMutation({
    mutationFn: (id: number) => deleteResumeApi(id, t),
    onSuccess: (data) => {
      toast.success(t("lk.resumes.api.deleteToastTitle", { position: data.position }));
      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteResume, isDeleting };
};
