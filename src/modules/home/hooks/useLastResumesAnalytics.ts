import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useUrl } from "../../shared/hooks";
import { getResumesAnalyticsAfterDate } from "../api/apiResumesAnalytics";
import { DEFAULT_LAST_DAYS } from "../const";

export const useLastResumesAnalytics = () => {
  const { getParam } = useUrl();
  const numDays = getParam("last") ? Number(getParam("last")) : Number(DEFAULT_LAST_DAYS);
  const queryDate = subDays(new Date(), numDays).toISOString();

  const {
    isLoading,
    data: lastResumes,
    error,
  } = useQuery({
    queryFn: () => getResumesAnalyticsAfterDate(queryDate),
    queryKey: ["resumes", `last-${numDays}`],
  });

  return {
    isLoading,
    error,
    lastResumes,
    numDays,
  };
};
