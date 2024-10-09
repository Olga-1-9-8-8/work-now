import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { createEditResume } from "../../shared/api";

export const useEditResume = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("resume");

  const { mutate: editResume, isPending: isEditing } = useMutation({
    mutationFn: createEditResume,
    onSuccess: ({ position }) => {
      toast.success(t("resume.api.editToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editResume, isEditing };
};
