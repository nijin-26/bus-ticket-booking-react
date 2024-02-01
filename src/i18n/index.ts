import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';

void i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es,
        },
    },
    lng: 'en', //Default language
    fallbackLng: 'en', //if language not available.
    interpolation: {
        escapeValue: false, //escape dynamic content and opting not to have the i18n library perform additional escaping for the interpolated values.
    },
});

export default i18n;
