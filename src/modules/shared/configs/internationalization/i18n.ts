import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

// TODO: import.meta.env.VITE_APP_IS_I18N_DEBUG_ON === "true",

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

// eslint-disable-next-line unicorn/prefer-export-from, import/no-default-export
export default i18n;
