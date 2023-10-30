import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ["uz", "en"]

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: false,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // check if language is cached in cookies, if not check local storage
      order: ["cookie", "localStorage"],
  
      // next-i18next by default searches for the "next-i18next" cookie on server requests
      lookupCookie: "lang",
      lookupLocalStorage: "lang",
      
      // cache the language in cookies and local storage
      caches: ["cookie", "localStorage"]
    }
  });

export default i18n;