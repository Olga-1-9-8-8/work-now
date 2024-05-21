import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ResumeApiType } from "../../shared/types";
import { updateResume } from "../api/apiResumesDetails";

export const useApplyResume = () => {
  const queryClient = useQueryClient();

  const { isPending: isApplyingResume, mutate: applyResume } = useMutation({
    mutationFn: ({
      id,
      applicantsQuantity,
      isApplied,
    }: Pick<ResumeApiType, "id" | "applicantsQuantity"> & { isApplied: boolean }) =>
      updateResume(id, applicantsQuantity + (isApplied ? 1 : -1)),
    onSuccess: (data, { isApplied }) => {
      const type = isApplied ? "success" : "warning";
      toast[type](
        isApplied
          ? `Вы откликнулись на резюме ${data.position}`
          : `Вы удалили отклик на резюме ${data.position}`,
      );
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return {
    applyResume,
    isApplyingResume,
  };
};
