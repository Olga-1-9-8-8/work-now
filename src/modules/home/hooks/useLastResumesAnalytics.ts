import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useMemo } from "react";
import { useUrl } from "../../shared/hooks";
import { useLanguageSwitcher } from "../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getResumesAnalyticsAfterDate } from "../api/apiResumesAnalytics";
import { DEFAULT_LAST_DAYS } from "../const";

export const useLastResumesAnalytics = () => {
  const { getParam } = useUrl();
  const numDays = getParam("last") ? Number(getParam("last")) : Number(DEFAULT_LAST_DAYS);
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { t } = useLanguageSwitcher("home");

  const {
    isLoading,
    data: lastResumes,
    error,
  } = useQuery({
    queryFn: () => getResumesAnalyticsAfterDate(queryDate, t),
    queryKey: ["resumes", `last-${numDays}`],
  });

  return useMemo(
    () => ({
      isLoading,
      error,
      lastResumes,
      numDays,
    }),
    [isLoading, error, lastResumes, numDays],
  );
};
