import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationUz from "./locales/uz/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationEn from "./locales/en/translation.json";
import translationDe from "./locales/de/translation.json";
import translationZh from "./locales/zh/translation.json";

const resources = {
  uz: { translation: translationUz },
  ru: { translation: translationRu },
  en: { translation: translationEn },
  de: { translation: translationDe },
  zh: { translation: translationZh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
