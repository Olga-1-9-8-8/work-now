export const getAverageApplicantsQuantity = <T extends { applicantsQuantity: number }[]>(
  resumes: T,
) => {
  if (resumes.length === 0) return null;
  return resumes.reduce((prev, curr) => prev + curr.applicantsQuantity, 0) / resumes.length;
};
