import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ResumeApiType } from "../../../shared/api";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { createEditResume } from "../../shared/api";

export const useCreateResume = () => {
  const { t } = useLanguageSwitcher("resume");
  const queryClient = useQueryClient();

  const { mutate: createResume, isPending: isCreating } = useMutation({
    mutationFn: (newResume: Omit<ResumeApiType, "id"> & { id?: number }) =>
      createEditResume(newResume, t),
    onSuccess: ({ position }) => {
      toast.success(t("resume.api.createToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
      queryClient.invalidateQueries({ queryKey: ["counts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createResume, isCreating };
};
