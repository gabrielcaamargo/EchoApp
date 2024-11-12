import React from 'react';
import {getLocales} from 'react-native-localize';
import {Box, Screen} from '@components';
export function ChatsScreen() {
	console.log(getLocales()[0]);
	return (
		<Screen>
			<Box />
		</Screen>
	);
}
