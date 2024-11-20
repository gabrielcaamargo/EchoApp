import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {MMKVStorage, initializeStorage} from '@storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDeviceLanguage} from '@hooks';
import {Router} from '@routes';
import {theme} from '@theme';

export default function App() {
	initializeStorage(MMKVStorage);
	useDeviceLanguage();

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<Router />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
