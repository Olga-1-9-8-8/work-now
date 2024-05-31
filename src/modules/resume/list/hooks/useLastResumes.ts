import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useUrl } from "../../../shared/hooks";
import { getResumesAfterDate } from "../api/apiResumes";
import { getAverageApplicantsQuantity } from "../utils/getAverageApplicantsQuantity";
import { getAverageResumeSalary } from "../utils/getAverageResumeSalary";

export const useLastResumes = () => {
  const { getParam } = useUrl();
  const numDays = getParam("last") ? Number(getParam("last")) : 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const {
    isLoading,
    data: lastResumes,
    error,
  } = useQuery({
    queryFn: () => getResumesAfterDate(queryDate),
    queryKey: ["resumes", `last-${numDays}`],
  });

  const withHigherEducationQuantity = lastResumes?.filter(
    (resume) => resume.education === "higher",
  );

  return {
    isLoading,
    error,
    lastResumesLength: lastResumes?.length ?? 0,
    withHigherEducationQuantity: withHigherEducationQuantity?.length ?? 0,
    averageResumeSalary: lastResumes ? getAverageResumeSalary(lastResumes) : 0,
    averageApplicantsQuantity: lastResumes ? getAverageApplicantsQuantity(lastResumes) : 0,
  };
};
