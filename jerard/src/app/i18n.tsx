import * as i18n from "i18next";
import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    interpolation: {escapeValue: false},
    cleanCode: true,
    backend: {
      loadPath: "/static/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["cookie"],
      caches: ["cookie"],
    },
  });

export {i18n};
