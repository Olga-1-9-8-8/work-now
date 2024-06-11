export const getAverageApplicantsQuantity = <T extends { applicants_quantity: number }[]>(
  resumes: T,
) => {
  if (resumes.length === 0) return null;
  return resumes.reduce((prev, curr) => prev + curr.applicants_quantity, 0) / resumes.length;
};
