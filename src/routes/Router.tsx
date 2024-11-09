import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabNavigation, AuthStackNavigation} from '@routes';

export function Router() {
	const user = true;

	return <NavigationContainer>{user ? <AppTabNavigation /> : <AuthStackNavigation />}</NavigationContainer>;
}
