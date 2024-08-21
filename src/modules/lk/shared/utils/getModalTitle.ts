export const getModalTitle = (title: string, isHiring?: boolean) => {
  return `Список ${isHiring ? "кандидатов" : "компаний"} ${title} ${isHiring ? "вакансию" : "резюме"}`;
};
