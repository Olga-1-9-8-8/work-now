import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { LanguageType } from "../../../shared/configs";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { getResume } from "../api/apiResume";

export const useResume = () => {
  const { t, language } = useLanguageSwitcher("resume");
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
    return resume ? mapUniversalItemWithProfile(resume, language as LanguageType) : undefined;
  }, [language, resume]);

  return {
    isLoading,
    error,
    resume: mappedResume,
  };
};
