import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';

const resources = {
	en,
	pt,
};

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: 'en' as keyof typeof resources,
	interpolation: {
		escapeValue: false,
	},
	resources,
});

export {i18n};
