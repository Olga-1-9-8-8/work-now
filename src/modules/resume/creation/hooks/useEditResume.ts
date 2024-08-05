import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createEditResume } from "../../shared/api";

export const useEditResume = () => {
  const queryClient = useQueryClient();

  const { mutate: editResume, isPending: isEditing } = useMutation({
    mutationFn: createEditResume,
    onSuccess: ({ position }) => {
      toast.success(`Резюме ${position} успешно отредактировано`);
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editResume, isEditing };
};
