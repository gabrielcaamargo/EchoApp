import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabNavigation, AuthStackNavigation} from '@routes';

export function Router() {
	return (
		<NavigationContainer>
			{/* <AuthStackNavigation /> */}
			<AppTabNavigation />
		</NavigationContainer>
	);
}
