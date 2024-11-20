import {useEffect} from 'react';
import {storage} from '@storage';
import {useLanguageStore} from '@store';
import {getLocales} from 'react-native-localize';
export function useDeviceLanguage() {
	const {setLanguage, language} = useLanguageStore();

	useEffect(() => {
		setDeviceLanguage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [storage]);

	function getDeviceLanguage() {
		const locales = getLocales();
		return locales[0].languageCode;
	}

	function setDeviceLanguage(newLanguage?: string) {
		const deviceLanguage = newLanguage || getDeviceLanguage();
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
