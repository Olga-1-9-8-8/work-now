export const getModalTitle = (title: string, isHiring: boolean, t: (key: string) => string) => {
  return `${t("lk.modal.title")} ${isHiring ? t("lk.modal.candidates") : t("lk.modal.companies")} ${title} ${isHiring ? t("lk.card.titleVacancy") : t("lk.card.linkTitleResume")}`;
};
