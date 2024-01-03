import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AR from "./ar.json";
import EN from "./en.json";
const resources = {
  en: EN,
  ar: AR,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // set default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
