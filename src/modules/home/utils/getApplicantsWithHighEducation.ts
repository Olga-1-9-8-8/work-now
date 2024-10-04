export const getApplicantsWithHighEducation = <T extends { education: string | null }[]>(
  items: T,
) => {
  return items.filter((item) => item.education === "higher").length;
};
