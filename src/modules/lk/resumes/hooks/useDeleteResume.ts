import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteResume as deleteResumeApi } from "../api/apiResumes";

export const useDeleteResume = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteResume } = useMutation({
    mutationFn: deleteResumeApi,
    onSuccess: (data) => {
      toast.success(`Резюме ${data.position} успешно удалено`);
      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteResume, isDeleting };
};
