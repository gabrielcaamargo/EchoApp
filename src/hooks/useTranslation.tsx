import {useTranslation as useI18Translation} from 'react-i18next';
import language from '@/lang/locales/pt-br.json';

type Translations = typeof language.translation;
type Path = keyof Translations;
type Keys<T extends Path> = keyof Translations[T];

export function useTranslation() {
	const {t} = useI18Translation();

	function translate<T extends Path>(path: T, key: Keys<T>) {
		return t(`${path}.${key as string}`);
	}

	return {translate};
}
