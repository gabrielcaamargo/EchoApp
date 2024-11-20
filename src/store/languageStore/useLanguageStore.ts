import {languageStore} from './languageStore';

export function useLanguageStore() {
	const language = languageStore(state => state.language);
	const setLanguage = languageStore(state => state.setLanguage);

	return {language, setLanguage};
}
