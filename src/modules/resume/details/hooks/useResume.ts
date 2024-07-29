import { useQuery } from "@tanstack/react-query";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { getResume } from "../api/apiResume";

export const useResume = (id?: number) => {
  const {
    isLoading,
    data: resume,
    error,
  } = useQuery({
    queryKey: ["resume", id],
    queryFn: () => getResume(id),
    retry: false,
  });

  return {
    isLoading,
    error,
    resume: resume ? mapUniversalItemWithProfile(resume) : undefined,
  };
};
