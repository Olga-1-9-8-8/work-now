import { GenderType } from "../../shared/types/GenderType";
/* eslint-disable unicorn/no-array-reduce */
import { LastResumesApiTypeInput } from "../../resume/list";
import { getGenderTitle } from "../../shared/types";

export const mapResumesToGenderChartData = (resumes: LastResumesApiTypeInput[]) => {
  const genderCounts = resumes.reduce(
    (counts, resume) => {
      const { gender } = resume.profiles!;
      if (!gender) return counts;
      return {
        ...counts,
        [gender]: (counts[gender as GenderType] || 0) + 1,
      };
    },
    { female: 0, male: 0 } as Record<GenderType, number>,
  );

  return Object.entries(genderCounts).map(([title, value]) => ({
    title: getGenderTitle(title as GenderType),
    value,
  }));
};
