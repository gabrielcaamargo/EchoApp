import {Router} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<Router />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
