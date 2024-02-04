import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enNs1 from './locales/en/ns1.json';
import enNs2 from './locales/en/ns2.json';
import esNs1 from './locales/es/ns1.json';
import esNs2 from './locales/es/ns2.json';
import esHeaderFooter from './locales/es/headerFooter.json';
import enHeaderFooter from './locales/en/headerFooter.json';
import esPassengerDetails from './locales/es/passengerDetails.json';
import enPassengerDetails from './locales/en/passengerDetails.json';

export const defaultNS = 'ns1';

void i18n.use(initReactI18next).init({
    debug: true, // for debugging
    resources: {
        en: {
            ns1: enNs1,
            ns2: enNs2,
            headerFooter: enHeaderFooter,
            passengerDetails: enPassengerDetails,
        },
        es: {
            ns1: esNs1,
            ns2: esNs2,
            headerFooter: esHeaderFooter,
            passengerDetails: esPassengerDetails,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS,
    ns: ['ns1', 'ns2'],
    interpolation: {
        escapeValue: false, //escape dynamic content and opting not to have the i18n library perform additional escaping for the interpolated values.
    },
});

export default i18n;
