import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { mapResume } from "../../shared/utils";
import { getResume } from "../api/apiResumesDetails";

export const useResume = () => {
  const { id } = useParams();

  const {
    isLoading,
    data: resume,
    error,
  } = useQuery({
    queryKey: ["resume", id],
    queryFn: () => getResume(id || ""),
    retry: false,
  });

  return {
    isLoading,
    error,
    resume: resume ? mapResume(resume) : undefined,
  };
};
