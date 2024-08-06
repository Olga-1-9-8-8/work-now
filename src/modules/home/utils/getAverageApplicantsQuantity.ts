export const getAverageApplicantsQuantity = <T extends { applicants_quantity: number }[]>(
  items?: T,
) => {
  if (!items || items.length === 0) return "Нет данных";

  return (items.reduce((prev, curr) => prev + curr.applicants_quantity, 0) / items.length).toFixed(
    0,
  );
};
