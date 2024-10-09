import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ResumeApiType } from "../../../shared/api";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { createEditResume } from "../../shared/api";

export const useEditResume = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("resume");

  const { mutate: editResume, isPending: isEditing } = useMutation({
    mutationFn: (newResume: Omit<ResumeApiType, "id"> & { id?: number }) =>
      createEditResume(newResume, t),
    onSuccess: ({ position }) => {
      toast.success(t("resume.api.editToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editResume, isEditing };
};
