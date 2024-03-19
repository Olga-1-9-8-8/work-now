import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SearchCard, WorkListItem } from "../../../../shared/components/search-card";
import { deleteResume } from "../../api/apiResumes";

interface ResumesListItemProps {
  resume: WorkListItem;
}

export const ResumesListItem = ({ resume }: ResumesListItemProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      toast.success("Резюме успешно удалено");
      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return <SearchCard data={resume} onClick={mutate} />;
};
