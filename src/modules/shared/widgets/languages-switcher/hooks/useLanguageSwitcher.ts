import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageSwitcher = () => {
  const { t, i18n } = useTranslation("header");

  const { changeLanguage, language } = useMemo(
    () => ({
      changeLanguage: i18n.changeLanguage,
      language: i18n.language,
    }),
    [i18n],
  );
  return { t, language, changeLanguage };
};
