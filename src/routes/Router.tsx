import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigation} from './AuthStackNavigation';

export function Router() {
	return (
		<NavigationContainer>
			<AuthStackNavigation />
		</NavigationContainer>
	);
}
