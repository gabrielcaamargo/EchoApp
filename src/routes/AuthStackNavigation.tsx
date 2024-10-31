import React from 'react';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {LanguageScreen, SignupScreen} from '@screens';
import {AuthStackParamList} from './navigationTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
	headerShown: false,
	fullScreenGestureEnabled: false,
};

export function AuthStackNavigation() {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name="LanguageScreen"
				component={LanguageScreen}
			/>
			<Stack.Screen
				name="SignupScreen"
				component={SignupScreen}
			/>
		</Stack.Navigator>
	);
}
