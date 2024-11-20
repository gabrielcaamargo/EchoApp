import {getLocales} from 'react-native-localize';

export function useGetDeviceLanguage() {
	const locales = getLocales();

	return locales[0].languageCode;
}
