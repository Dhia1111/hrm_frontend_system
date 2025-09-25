
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/Language/en.json";
import fr from "./assets/Language/fr.json";
import ar from "./assets/Language/ar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }
    },
    lng: "en", // ✅ Default language (set to "fr" or "ar" if you prefer)
    fallbackLng: "en", // ✅ If translation missing, fall back to English
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;