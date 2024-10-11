import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigation} from './AuthStackNavigation';

export function Router() {
	return (
		<NavigationContainer>
			<AuthStackNavigation />
		</NavigationContainer>
	);
}
