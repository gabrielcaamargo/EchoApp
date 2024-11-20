import {useEffect} from 'react';
import {storage} from '@storage';
import {useLanguageStore} from '@store';
import {getLocales} from 'react-native-localize';
export function useDeviceLanguage() {
	const {setLanguage, language} = useLanguageStore();
	useEffect(() => {
		console.log('Language:::', language);
	}, [language]);

	useEffect(() => {
		setDeviceLanguage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [storage]);

	function getDeviceLanguage() {
		const locales = getLocales();
		return locales[0].languageCode;
	}

	function setDeviceLanguage() {
		const deviceLanguage = getDeviceLanguage();
		const availableLanguages = ['en', 'pt'];

		if (deviceLanguage === language || !language) {
			return;
		}

		if (availableLanguages.includes(deviceLanguage)) {
			setLanguage(deviceLanguage);
			return;
		}

		setLanguage('en');
	}

	return {getDeviceLanguage, setDeviceLanguage};
}
