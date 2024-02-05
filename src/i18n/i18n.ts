import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';
import es from './locales/es/es.json';

const { ns1: enNs1, ns2: enNs2, headerFooter: enHeaderFooter } = en;
const { ns1: esNs1, ns2: esNs2, headerFooter: esHeaderFooter } = es;

export const defaultNS = 'ns1';

void i18n.use(initReactI18next).init({
    debug: true, // for debugging
    resources: {
        en: {
            ns1: enNs1,
            ns2: enNs2,
            headerFooter: enHeaderFooter,
        },
        es: {
            ns1: esNs1,
            ns2: esNs2,
            headerFooter: esHeaderFooter,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS,
    ns: ['ns1', 'ns2', 'headerFooter'],
    interpolation: {
        escapeValue: false, //escape dynamic content and opting not to have the i18n library perform additional escaping for the interpolated values.
    },
});

export default i18n;
