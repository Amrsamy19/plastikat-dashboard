import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arabicTranslation from './Translation/arabic';
import englishTranslation from './Translation/english';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ar',
    resources: {
      en: {
        translation: englishTranslation
			},
			ar: {
				translation: arabicTranslation
			},
    }
  });

export default i18n;
