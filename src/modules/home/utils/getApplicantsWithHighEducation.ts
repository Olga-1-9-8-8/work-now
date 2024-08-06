export const getApplicantsWithHighEducation = <T extends { education: string | null }[]>(
  items?: T,
) => {
  if (!items || items.length === 0) return "Нет данных";

  return items.filter((item) => item.education === "higher").length;
};
