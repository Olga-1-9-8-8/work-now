import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createEditResume } from "../../shared/api";

export const useCreateResume = () => {
  const queryClient = useQueryClient();

  const { mutate: createResume, isPending: isCreating } = useMutation({
    mutationFn: createEditResume,
    onSuccess: () => {
      toast.success("Новое резюме создано");
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createResume, isCreating };
};
