import {storage} from '@storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

export type LanguageStore = {
	language: string;
	setLanguage: (language: string) => void;
};

export const languageStore = create<LanguageStore>()(
	persist(
		set => ({
			language: '',
			setLanguage: language => set({language}),
		}),
		{
			name: '@Language',
			storage,
		},
	),
);
