import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en', // Set the default language here
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de'], // Add supported languages here
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Set the path to your Contentful translation files
    },
  });

export default i18n;
