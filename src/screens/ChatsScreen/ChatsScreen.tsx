import React from 'react';
import {getLocales} from 'react-native-localize';
import {Box, Screen} from '@components';
import {useGetDeviceLanguage} from '@hooks';
export function ChatsScreen() {
	const language = useGetDeviceLanguage();

	return (
		<Screen>
			<Box />
		</Screen>
	);
}
