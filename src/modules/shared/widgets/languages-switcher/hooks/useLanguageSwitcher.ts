import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageSwitcher = (title: string = "translation") => {
  const { t, i18n } = useTranslation(title);

  return useMemo(
    () => ({
      t,
      language: i18n.language,
      changeLanguage: i18n.changeLanguage,
    }),
    [t, i18n.language, i18n.changeLanguage],
  );
};
