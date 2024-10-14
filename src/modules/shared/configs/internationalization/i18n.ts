import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV === true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["shared", "home", "lk", "login", "resume", "vacancy", "seo"],
    defaultNS: "shared",
    supportedLngs: ["en", "de", "ru"],
  });

// eslint-disable-next-line unicorn/prefer-export-from, import/no-default-export
export default i18n;
