import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getResume } from "../api/apiResume";

export const useResume = () => {
  const { t } = useLanguageSwitcher("resume");
  const { id } = useParams();
  const resumeId = id ? Number(id) : undefined;

  const {
    isLoading,
    data: resume,
    error,
  } = useQuery({
    queryKey: ["resume", resumeId],
    queryFn: () => getResume(t, resumeId),
    retry: false,
  });

  const mappedResume = useMemo(() => {
    return resume ? mapUniversalItemWithProfile(resume) : undefined;
  }, [resume]);

  return {
    isLoading,
    error,
    resume: mappedResume,
  };
};
