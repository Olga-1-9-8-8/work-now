import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { createEditResume } from "../../shared/api";

export const useCreateResume = () => {
  const { t } = useLanguageSwitcher("resume");
  const queryClient = useQueryClient();

  const { mutate: createResume, isPending: isCreating } = useMutation({
    mutationFn: createEditResume,
    onSuccess: ({ position }) => {
      toast.success(t("resume.api.createToastTitle", { position }));
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createResume, isCreating };
};
