import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createEditResume } from "../../list/api/apiResumes";

export const useEditResume = () => {
  const queryClient = useQueryClient();

  const { mutate: editResume, isPending: isEditing } = useMutation({
    mutationFn: createEditResume,
    onSuccess: () => {
      toast.success("Резюме успешно отредактировано");
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editResume, isEditing };
};
