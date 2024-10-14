import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageSwitcher = (title: string) => {
  const { t, i18n } = useTranslation(title);
  const { language, changeLanguage } = i18n;

  return useMemo(
    () => ({
      t,
      language,
      changeLanguage,
    }),
    [t, language, changeLanguage],
  );
};
