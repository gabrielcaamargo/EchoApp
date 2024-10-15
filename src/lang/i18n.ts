import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ptBr from './pt-br.json';

const resources = {
	'en-US': en,
	'pt-BR': ptBr,
};

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: 'pt-BR',
	resources,
});

export {i18n};
