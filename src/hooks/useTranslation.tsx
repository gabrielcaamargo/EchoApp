import {ptBr} from '@lang';
import {useTranslation as useI18Translation} from 'react-i18next';

export type Translations = typeof ptBr.translation;
type Path = keyof Translations;
type Keys<T extends Path> = keyof Translations[T];

export function useTranslation() {
	const {t} = useI18Translation();

	function splitPath(path?: string) {
		return path ? (path.split('.') as [Path, Keys<Path>]) : [];
	}

	function translate<T extends Path>(path: T, key: Keys<T>) {
		return t(`${path}.${key as string}`);
	}

	return {splitPath, translate};
}
